import React , {useEffect} from "react";

import {
  View,
  Text,
  Button,
  Colors,
  Image,
  Carousel,
  PageControl,
  Card,
  Spacings,
} from "react-native-ui-lib";

import { styles } from "../theme/styles";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { ActionBar } from "react-native-ui-lib";

export const Info = () => {
  const { t } = useTranslation();
  const [pageNumber, setPageNumber] = React.useState(0);
  const buttons = ["section1", "section2", "section3"];
  var carousel = React.createRef(Carousel)
  const renderBG = (index) => {
    return pageNumber === index ? Colors.lightGrey : Colors.darkGrey;
  };
  const renderColor = (index) => {
    return pageNumber === index ? Colors.primaryColor : Colors.lightGrey;
  };

  useEffect(() =>{
    if (carousel) {
        carousel.goToPage(pageNumber, true);
    }
    console.log("Changed!")
    }, [pageNumber])

  return (
    <ScrollView>
      <View flex>
        <View maxHeight={200} bg-primaryColor>
          <View top centerH marginT-80 bg-primaryColor>
            <Text white h1>
              {t("financial:title")}
            </Text>
          </View>
          <View marginT-s5 centerH>
            <View center style={styles.circle}>
              <Image
                source={require("../assets/oldman.png")}
                style={styles.logo}
              />
            </View>
          </View>
        </View>
        <View centerH marginT-125 paddingH-30>
          <Text h1>{t("financial:header")}</Text>
          <Text center h4 marginT-s3>
            {t("financial:subheader")}
          </Text>
        </View>
      </View>
      <View centerH>
        <View bg-darkGrey padding-2 br100 row marginV-s5 width={"80%"}>
          {buttons.map((button, index) => {
            return (
              <Button
                flex
                marginR-10
                backgroundColor={renderBG(index)}
                onPress={() => setPageNumber(index)}
              >
                <Text label color={renderColor(index)}>
                  {t(`financial:${button}`)}
                </Text>
              </Button>
            );
          })}
        </View>
      </View>
      <View padding-20>
        <Carousel
          borderRadius={20}
          initialPage={pageNumber}
          onChangePage={(pageIndex, oldIndex) => {
            if (pageIndex === 0) {
              setPageNumber(0);
            } else if (pageIndex === 1) {
              setPageNumber(1);
            } else if (pageIndex === 2) {
              setPageNumber(2);
            }
          }}
          ref={ref=>carousel = ref}
          

        >
          {buttons.map((button, index) => {
            return (
              <Card backgroundColor={Colors.lightGrey}>
                <View padding-20>
                  <Text h2 marginB-s3 padding-10> {t(`financial:${button}Title`)}</Text>
                  <View backgroundColor= {Colors.darkerGrey} height={1} marginB-s3 ></View>
                  <Text body darkerGrey>{t(`financial:${button}Text`)}</Text>
                </View>

                <Card.Section
                  bg-primaryColor
                  padding-10
                  content={[
                    {
                      text: "Call 1-800-962-2873 for Help Now",
                      text70: true,
                      white: true,
                    },
                  ]}
                  contentStyle={{ alignItems: "center" }}
                ></Card.Section>
              </Card>
            );
          })}
        </Carousel>
      </View>

      <PageControl
        numOfPages={3}
        color={Colors.primaryColor}
        activeColor={Colors.darkGrey}
        currentPage={pageNumber}
      />
    </ScrollView>
  );
};
