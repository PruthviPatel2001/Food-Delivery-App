import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Restaurant from "./screens/Restaurant";
import { TailwindProvider } from "tailwindcss-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
