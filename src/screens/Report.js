import React, {useState} from "react";

import {
  View,
  Text,
  Card,
  Button,
  TouchableOpacity,
  Incubator,
  KeyboardAwareScrollView,
  Colors
} from "react-native-ui-lib";
import { StyleSheet} from "react-native";
import { useTranslation } from "react-i18next";
const { TextField } = Incubator;

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

const SectionHeader = () => {
    return (
        <View row marginT-s10 marginB-s5 spread >
            <Text h1>{t('common:languageSelector')}</Text>
        </View>
    )
}

export default Report = ({ navigation }) => {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  return (
    <KeyboardAwareScrollView>
      <View flex padding-page top marginT-s10>
        <Header navigation={navigation} t={t} />
        <TextField
            label="URL"
            labelStyle={styles.label}
            value={url}
            placeholder="Enter URL"
            placeholderStyle ={styles.placeholder}
            text70
            fieldStyle={styles.withFrame}
            marginB-s4
          />
      </View>
    </KeyboardAwareScrollView>
  );
};


const styles = StyleSheet.create({
    placeholder: {
        color: Colors.darkerGrey,
    },
    label: {
        color: Colors.darkerGrey,
        marginBottom: 5,
        fontSize: 16,
    },
    withFrame: {
        borderWidth: 1,
        borderColor: Colors.darkGrey,
        padding: 13,
        borderRadius: 4,
        backgroundColor: Colors.lightGrey,
      }
})