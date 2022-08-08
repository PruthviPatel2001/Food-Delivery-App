import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import React, { useState } from "react";
import { addToBasket, selectBasketItems } from "../redux/features/basketSlice";
import { useDispatch, useSelector } from "react-redux";

import { urlFor } from "../sanity";

const DishRow = ({ _id, price, image, name, short_description }) => {
  const [isPressed, setisPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems)

  const addItemToBasket = () => {
    dispatch(addToBasket({ _id, price, image, name, short_description }));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setisPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400 mt-2">Rs.{price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity>
              <PlusCircleIcon onPress={addItemToBasket} color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
