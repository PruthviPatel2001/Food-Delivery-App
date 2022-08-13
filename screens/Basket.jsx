import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { XCircleIcon } from "react-native-heroicons/solid";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import { urlFor } from "../sanity";
import { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);

  const [groupedItemsInBasket, setgroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item); // if more than 1 qty of same item than it will push inside array of its key  eg. 2  pav bhaji  then it will be in array grouped together nd name of array will be id of it
      return results;
    }, {});

    setgroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-4 right-5"
          >
            <XCircleIcon color="#00CCBB" height={30} width={30} />
          </TouchableOpacity>
        </View>
        <View className=" flex-row items-center space-x-4 py-3 px-2 bg-white my-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 30-40 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {console.log("group items:", Object.entries(groupedItemsInBasket))}
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                Rs.{items[0]?.price * items.length}
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB] text-xs"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white space-y-4 mt-5">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">SubTotal</Text>
            <Text className="text-gray-400">Rs.{basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fees</Text>
            <Text className="text-gray-400">+ Rs.20</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font- text-black-400">Order Total</Text>
            <Text className="font-extrabold">Rs.{basketTotal + 20}</Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4" onPress={()=>navigation.navigate("PreparationOrder")}>
             <Text className="text-center text-white text-lg font-bold">
              Place Order
             </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basket;
