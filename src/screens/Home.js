import React, { Component } from "react";
import { View, Text, Card, Button } from "react-native-ui-lib";

export default Home = () => {
  return (
    <View flex padding-page>
      <Text h1 marginB-s4>
        Home
      </Text>
      <Card height={100} center padding-card marginB-s4>
        <Text body>This is an example card </Text>
      </Card>
      <Text body primaryColor>
        Button
      </Text>
      <Button label="Button" 
      onPress={() => console.log("Button pressed")}
      body bg-primaryColor></Button>
    </View>
  );
};
