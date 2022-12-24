import React, { Component } from "react";
import { View, Text, Card, Button } from "react-native-ui-lib";
import { Selector } from "../components/LanguageSelector";
export const Settings = () => {
    return (
      <View flex padding-page>
        <Selector />
      </View>
    );
  };