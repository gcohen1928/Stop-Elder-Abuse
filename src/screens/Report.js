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
  Wizard,
} from "react-native-ui-lib";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { changeData, sendData } from "../redux/form-actions";
import { styles } from "../theme/styles";
import { t } from "i18next";

const { TextField } = Incubator;

const Header = ({ navigation, t }) => {
  return (
    <View row marginT-s5 marginB-s5>
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

const FormInput = ({ id, reducer, large }) => {
  const { t } = useTranslation();
  return (
    <TextField
      label={t(`form:${id}`)}
      labelStyle={large ? styles.multilineLabel : styles.label}
      onChangeText={(text) => {
        reducer.dispatch({ type: "UPDATE", key: id, value: text });
      }}
      value={reducer.state[`${id}`]}
      placeholder={t(`form:${id}`)}
      placeholderStyle={styles.placeholder}
      text70
      maxLength={large ? 2000 : 40}
      multiline={large ? true : false}
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
  victimName: "",
  victimAddress: "",
  victimPhone: "",
  victimCity: "",
  victimPostalCode: "",
  DOB: "",
  sex: "",
  race: "",
  SSN: "",
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

const ReporterInfo = ({ state, dispatch, t }) => {
  return (
    <>
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
      <FormInput id="agency" reducer={{ state, dispatch }} />
      <FormInput id="jobTitle" reducer={{ state, dispatch }} />
    </>
  );
};
const VictimInfo = ({ state, dispatch, t }) => {
  return (
    <>
      <SectionHeader title="section2" t={t} />
      <FormInput id="victimName" reducer={{ state, dispatch }} />
      <FormInput id="victimAaddress" reducer={{ state, dispatch }} />
      <View row spread>
        <View flex marginR-s3>
          <FormInput id="victimCity" reducer={{ state, dispatch }} />
        </View>
        <View flex>
          <FormInput id="victimPostalCode" reducer={{ state, dispatch }} />
        </View>
      </View>
      <FormInput id="victimPhone" reducer={{ state, dispatch }} />
      <FormInput id="DOB" reducer={{ state, dispatch }} />
      <View row spread>
        <View flex marginR-s3>
          <FormInput id="sex" reducer={{ state, dispatch }} />
        </View>
        <View flex>
          <FormInput id="race" reducer={{ state, dispatch }} />
        </View>
      </View>
      <FormInput id="SSN" reducer={{ state, dispatch }} />
    </>
  );
};

const OtherInfo = ({ state, dispatch, t }) => {
  return (
    <>
      <SectionHeader title="section3" t={t} />
      <FormInput id="facilityName" reducer={{ state, dispatch }} />
      <FormInput id="otherLocations" reducer={{ state, dispatch }} />
      <SectionHeader title="descriptionTitle" t={t} />
      <FormInput large id="descriptionInput" reducer={{ state, dispatch }} />
      <SectionHeader title="vulnerableTitle" t={t} />
      <FormInput large id="vulnerableInput" reducer={{ state, dispatch }} />
    </>
  );
};

const Attatchments = ({ state, dispatch, t }) => {
    
};

const Report = ({ navigation }, props) => {
  const { t } = useTranslation();
  const data = useSelector((state) => state.form.name);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedStepIndex, setCompletedStepIndex] = useState(undefined);

  const renderCurrentStep = ({ navigation, state, dispatch, t }) => {
    switch (activeIndex) {
      case 0:
      default:
        return (
          <ReporterInfo
            navigation={navigation}
            state={state}
            dispatch={dispatch}
            t={t}
          />
        );
      case 1:
        return (
          <VictimInfo
            navigation={navigation}
            state={state}
            dispatch={dispatch}
            t={t}
          />
        );
      case 2:
        return <OtherInfo state={state} dispatch={dispatch} t={t} />;
      case 3:
        return <Attatchments state={state} dispatch={dispatch} t={t} />;
    }
  };

  const goToNextStep = () => {
    if (activeIndex === 3) {
      handleSubmit();
      setActiveIndex(0);
      setCompletedStepIndex(undefined);
    } else {
      setCompletedStepIndex(activeIndex);
      setActiveIndex(activeIndex + 1);
    }
  };
  const goToPrevStep = () => {
    if (activeIndex === 0) {
      navigation.goBack();
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const NextButton = () => {
    const label = activeIndex === 3 ? "Submit" : "Next";
    return (
      <Button
        marginH-50
        marginB-s10
        bg-primaryColor
        label={label}
        labelStyle={{ color: Colors.white }}
        onPress={goToNextStep}
      />
    );
  };

  const handleSubmit = () => {
    console.log(state);
    // dispatch(sendData(url));
    // dispatch(changeData(url));
  };
  return (
    <KeyboardAwareScrollView>
      <View flex padding-page top marginT-s10>
        <View row marginT-s2 marginB-s5>
          <View left>
            <TouchableOpacity body textColor onPress={goToPrevStep}>
              <Text body primaryColor>
                {t("common:back")}
              </Text>
            </TouchableOpacity>
          </View>
          <View marginL-70>
            <Text h1>{t("common:reportTitle")}</Text>
          </View>
        </View>
        {renderCurrentStep({ navigation, state, dispatch, t })}
      </View>
      <NextButton />
    </KeyboardAwareScrollView>
  );
};

export default Report;
