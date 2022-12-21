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
}

const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE":
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state;
        }
}

const Report = ({ navigation }, props) => {
  const { t } = useTranslation();
//   const dispatch = useDispatch();
  const data = useSelector((state) => state.form.name);
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = () => {
    console.log(reducerState);
    // dispatch(sendData(url));
    // dispatch(changeData(url));
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
             dispatch({type: "UPDATE", key: "name", value: text})
          }}
          value={reducerState.name}
          placeholder={t("form:name")}
          placeholderStyle={styles.placeholder}
          text70
          maxLength={40}
          fieldStyle={styles.withFrame}
        />
        <TextField
          label={t("form:address")}
          labelStyle={styles.label}
          onChangeText={(text) => {
            dispatch({type: "UPDATE", key: "address", value: text})
          }}
          value={reducerState.address}
          placeholder={t("form:address")}
          placeholderStyle={styles.placeholder}
          text70
          maxLength={40}
          fieldStyle={styles.withFrame}
        />
        <View row spread>
          <View flex marginR-s3>
            <TextField
              label={t("form:city")}
              labelStyle={styles.label}
              onChangeText={(text) => {
                dispatch({type: "UPDATE", key: "city", value: text})
              }}
              value={reducerState.city}
              placeholder={t("form:city")}
              placeholderStyle={styles.placeholder}
              text70
              maxLength={20}
              fieldStyle={styles.withFrame}
            />
          </View>
          <View flex>
            <TextField
              label={t("form:postalCode")}
              labelStyle={styles.label}
              onChangeText={(text) => {
                dispatch({type: "UPDATE", key: "postalCode", value: text})
              }}
              value={reducerState.postalCode}
              placeholder={t("form:postalCode")}
              placeholderStyle={styles.placeholder}
              text70
              maxLength={5}
              fieldStyle={styles.withFrame}
            />
          </View>
        </View>
        <TextField
          label={t("form:phone")}
          labelStyle={styles.label}
          onChangeText={(text) => {
            dispatch({type: "UPDATE", key: "phone", value: text})
          }}
          value={reducerState.phone}
          placeholder={t("form:phone")}
          placeholderStyle={styles.placeholder}
          text70
          maxLength={15}
          fieldStyle={styles.withFrame}
        />
        <View row>
          <Text style={styles.label} darkGrey>
            {t("form:contactConsent")}
          </Text>
          <Checkbox
            value={reducerState.contactConsent}
            onValueChange={(check) => dispatch({type: "UPDATE", key: "contactConsent", value: check})}
            borderRadius={5}
            size={17}
            color={Colors.primaryColor}
            iconColor={Colors.white}
            marginL-s5
          />
        </View>
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
