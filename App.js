import { StyleSheet, Text, View } from "react-native";

import Basket from "./screens/Basket";
import Delivery from "./screens/Delivery";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import PrepareOrder from "./screens/PrepareOrder";
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
            <Stack.Screen
              name="Basket"
              component={Basket}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PreparationOrder"
              component={PrepareOrder}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={Delivery}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
