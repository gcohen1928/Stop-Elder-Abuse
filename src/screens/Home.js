import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  View,
  Text,
  Card,
  Button,
  Image,
  Colors,
  TouchableOpacity,
} from "react-native-ui-lib";
import { HomeListItem } from "../components/HomeList";
import { useTranslation } from "react-i18next";
const categories = [ "resources","financial", "physical", "neglect",];

export const Home = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View flex padding-page>
        <Text h1 marginT-100 marginB-s10>
          Stop Elder Abuse
        </Text>
        {categories.map((category) => {
          return <HomeListItem key={category} category={category} />;
        })}

        <Button
          marginT-10
          label={t("common:report")}
          onPress={() => navigation.navigate("Report")}
          body
          bg-primaryColor
        ></Button>
        <Button
          marginT-10
          label={t("common:chat")}
          onPress={() => {
            Alert.alert(
              "You are about to join a live chat",
              "If this is an emergency, please call the police instead",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => {
                    navigation.navigate("Chat");
                  },
                },
              ]
            );
          }}
          body
          bg-lightGrey
          labelStyle={{ color: Colors.primaryColor }}
        ></Button>
      </View>
    </ScrollView>
  );
};
