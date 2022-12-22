import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import { Colors } from "react-native-ui-lib";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Report from "../screens/Report";
import { Chat } from "../screens/Chat";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-outline",
  Chat: 'chatbubble-ellipses-outline',
  Report: 'flag-outline',
  Settings: "settings-outline",
};

const createScreenOptions = ({ route }) => {
  // const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ focused, size, color }) => {
      let iconName;
      if (route.name === "Home") {
        iconName = focused
          ? "home"
          : "home-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "settings" : "settings-outline";
      }
       else if (route.name === "Chat") {
        iconName = focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline";
      }
       else if (route.name === "Report") {
        iconName = focused ? "flag" : "flag-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: Colors.primaryColor,
    tabBarInactiveTintColor: Colors.darkerGrey,
    headerShown: false,
  };
};

export default RootNavigator = () => {
    const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel : t('navigate:home')}} />
        <Tab.Screen name="Report" component={Report}
        options={{tabBarLabel : t('navigate:report')}}
        />
        <Tab.Screen name="Chat" component={Chat}
        options={{tabBarLabel : t('navigate:chat')}}
        />
        <Tab.Screen name="Settings" component={Settings}
        options={{tabBarLabel : t('navigate:settings')}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
