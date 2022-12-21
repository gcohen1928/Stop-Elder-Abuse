import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

const colors ={
    primaryColor: "#083D77",
    secondaryColor: "#EBEBD3",
    tertiaryColor: "#DA4167",
    textColor: "#221D23",
    altTextColor: "#FFFFFF",
    white: "#FFFFFF",
    darkerGrey: "#666666",
    lightGrey: "#ECECEE",
    darkGrey: "#BDBDBD",
    errorColor: "#E63B2E",
    successColor: "#ADC76F",
    warnColor: "##FF963C",
}

export const styles = StyleSheet.create({
    placeholder: {
      color: colors.darkerGrey,
    },
    label: {
      color: colors.darkerGrey,
      fontSize: 12,
    },
    withFrame: {
      borderWidth: 1,
      borderColor: colors.darkGrey,
      padding: 13,
      borderRadius: 4,
      backgroundColor: colors.lightGrey,
      marginBottom: 8,
    },
    divider: {
      borderBottomColor: colors.darkGrey,
      borderBottomWidth: 1,
    },
  });