import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}>
          
          </Stack.Screen>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
