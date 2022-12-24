import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
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

export const Home = () => {
  const categories = ["financial", "physical", "neglect", "resources"];
  const navigation = useNavigation();
  return (
    <View flex padding-page>
      <Text h1 marginT-100 marginB-s10>
        Stop Elder Abuse
      </Text>
        {categories.map((category) => {
          return <HomeListItem category={category} />;
        })}

      <Button
        marginT-10
        label="File a Report Now"
        onPress={() => navigation.navigate("Report")}
        body
        bg-primaryColor
      ></Button>
      <Button
        marginT-10
        label="Chat with a Counselor"
        onPress={() => navigation.navigate("Chat")}
        body
        bg-lightGrey
        labelStyle={{ color: Colors.primaryColor }}
      ></Button>
    </View>
  );
};
