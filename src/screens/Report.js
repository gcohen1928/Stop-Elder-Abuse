import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Incubator,
  KeyboardAwareScrollView,
  Colors,
  NumberInput
} from "react-native-ui-lib";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { changeData, sendData } from "../redux/form-actions";

const { TextField } = Incubator;

const styles = StyleSheet.create({
  placeholder: {
    color: Colors.darkerGrey,
  },
  label: {
    color: Colors.darkerGrey,
    fontSize: 12,
  },
  withFrame: {
    borderWidth: 1,
    borderColor: Colors.darkGrey,
    padding: 13,
    borderRadius: 4,
    backgroundColor: Colors.lightGrey,
    marginBottom: 8,
  },
  divider: {
    borderBottomColor: Colors.darkGrey,
    borderBottomWidth: 1,
  },
});

const Header = ({ navigation, t }) => {
  return (
    <View row marginT-s3 marginB-s5>
      <View left>
        <TouchableOpacity body textColor onPress={() => navigation.goBack()}>
          <Text body primaryColor>
            {t("common:back")}
          </Text>
        </TouchableOpacity>
      </View>
      <View marginL-70>
        <Text h1>{t("common:reportTitle")}</Text>
      </View>
    </View>
  );
};

const SectionHeader = ({ title, t }) => {
  return (
    <View row marginT-s10 marginB-s5 spread paddingB-s5 style={styles.divider}>
      <Text h4>{t(`form:${title}`)}</Text>
    </View>
  );
};

const Report = ({ navigation }, props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.name);

  const handleSubmit = () => {
    console.log(url);
    dispatch(sendData(url));
    dispatch(changeData(url));
  };

  const [url, setUrl] = useState("");
  return (
    <KeyboardAwareScrollView>
      <View flex padding-page top marginT-s10>
        <Header navigation={navigation} t={t} />
        <SectionHeader title="section1" t={t} />
        <TextField
          label={t("form:name")}
          labelStyle={styles.label}
          onChangeText={(text) => {
            setUrl(text);
          }}
          value={url}
          placeholder={t("form:name")}
          placeholderStyle={styles.placeholder}
          text70
          fieldStyle={styles.withFrame}
        />
        <TextField
          label={t("form:address")}
          labelStyle={styles.label}
          onChangeText={(text) => {
            setUrl(text);
          }}
          value={url}
          placeholder="Enter URL"
          placeholderStyle={styles.placeholder}
          text70
          fieldStyle={styles.withFrame}
        />
        <View row spread>
          <View flex marginR-s3>
            <TextField
              label={t("form:city")}
              labelStyle={styles.label}
              onChangeText={(text) => {
                setUrl(text);
              }}
              value={url}
              placeholder={t("form:city")}
              placeholderStyle={styles.placeholder}
              text70
              fieldStyle={styles.withFrame}
            />
          </View>
          <View flex>
            <TextField
              label={t("form:postalCode")}
              labelStyle={styles.label}
              onChangeText={(text) => {
                setUrl(text);
              }}
              value={url}
              placeholder={t("form:postalCode")}
              placeholderStyle={styles.placeholder}
              text70
              fieldStyle={styles.withFrame}
            />
          </View>
        </View>
        <TextField
              label={t("form:phone")}
              labelStyle={styles.label}
              onChangeText={(text) => {
                setUrl(text);
              }}
              value={url}
              placeholder={t("form:phone")}
              placeholderStyle={styles.placeholder}
              text70
              fieldStyle={styles.withFrame}
            />
        <Text>{data}</Text>
      </View>
      <Button onPress={handleSubmit}>
        <Text>Press Me!</Text>
      </Button>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
