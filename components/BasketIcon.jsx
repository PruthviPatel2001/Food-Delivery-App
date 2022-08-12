import { Text, TouchableOpacity, View } from "react-native";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketeTotal = useSelector(selectBasketTotal);

  if(items.length===0) return null
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=>navigation.navigate("Basket")} className=" mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="text-white font-extrabold bg-[#01A296] text-lg py-1 px-2 ">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          Rs.{basketeTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
