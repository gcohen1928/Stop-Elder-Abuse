import { createStackNavigator } from "@react-navigation/stack";
import {Info} from "../screens/Info";
import {Home} from "../screens/Home";

const Stack = createStackNavigator();

export default HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="financial"
        component={() => Info({category: "financial"})}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="physical"
        component={() => Info({category: "physical"})}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
