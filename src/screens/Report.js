import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Incubator,
  KeyboardAwareScrollView,
  Checkbox,
  Colors,
} from "react-native-ui-lib";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { changeData, sendData } from "../redux/form-actions";
import { styles } from "../theme/styles";
import { t } from "i18next";

const { TextField } = Incubator;

const Header = ({ navigation, t }) => {
  return (
    <View row marginB-s5>
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

const FormInput = ({ id, reducer }) => {
  const { t } = useTranslation();
  return (
    <TextField
      label={t(`form:${id}`)}
      labelStyle={styles.label}
      onChangeText={(text) => {
        reducer.dispatch({ type: "UPDATE", key: id, value: text });
      }}
      value={reducer.state[`${id}`]}
      placeholder={t(`form:${id}`)}
      placeholderStyle={styles.placeholder}
      text70
      maxLength={40}
      fieldStyle={styles.withFrame}
    />
  );
};

const initialState = {
  name: "",
  address: "",
  phone: "",
  city: "",
  postalCode: "",
  contactConsent: false,
  agency: "",
  jobTitle: "",
  relationship: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

const Report = ({ navigation }, props) => {
  const { t } = useTranslation();
  //   const dispatch = useDispatch();
  const data = useSelector((state) => state.form.name);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = () => {
    console.log(state);
    // dispatch(sendData(url));
    // dispatch(changeData(url));
  };
  return (
    <KeyboardAwareScrollView>
      <View flex padding-page top marginT-s10>
        <Header navigation={navigation} t={t} />
        <SectionHeader title="section1" t={t} />
        <FormInput id="name" reducer={{ state, dispatch }} />
        <FormInput id="address" reducer={{ state, dispatch }} />
        <View row spread>
          <View flex marginR-s3>
            <FormInput id="city" reducer={{ state, dispatch }} />
          </View>
          <View flex>
            <FormInput id="postalCode" reducer={{ state, dispatch }} />
          </View>
        </View>
        <FormInput id="phone" reducer={{ state, dispatch }} />
        <FormInput id="relationship" reducer={{ state, dispatch }} />
        <View row spread>
          <Text label darkerGrey>
            {t("form:contactConsent")}
          </Text>
          <Checkbox
            value={state.contactConsent}
            onValueChange={(check) =>
              dispatch({ type: "UPDATE", key: "contactConsent", value: check })
            }
            borderRadius={5}
            size={17}
            color={Colors.primaryColor}
            iconColor={Colors.white}
            marginL-s5
            marginT-s1
          />
        </View>
        
      </View>
      <Button marginH-50 bg-primaryColor onPress={handleSubmit}>
        <Text white>Submit Report</Text>
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
