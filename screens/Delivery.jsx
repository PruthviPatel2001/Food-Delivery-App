import * as Progress from "react-native-progress";

import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import React from "react";
import { XIcon } from "react-native-heroicons/outline";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  console.log("restaurant", restaurant.lat ,"=> long",restaurant.long);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400 ">Estimated time</Text>
              <Text className="text-4xl font-bold">30-40 minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order is being prepared !!
          </Text>
        </View>
      </SafeAreaView>

      <View className="flex-1">
        <MapView
          initialRegion={{
            latitude:restaurant.lat,
            longitude:restaurant.long,
            latitudeDelta:0.005,
            longitudeDelta:0.005
         
          }}
          className="flex-1 mt-5 z-0 "
          mapType="mutedStandard"
        ></MapView>
      </View>
    </View>
  );
};

export default Delivery;
