import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { selectBasketItems } from "../redux/features/basketSlice";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Basket = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  const [groupedItemsInBasket, setgroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results , item) => {
        (results[item.id] = results[item.id] || []).push(item) // if more than 1 qty of same item than it will push inside array of its key  eg. 2  pav bhaji  then it will be in array grouped together nd name of array will be id of it
        return results
    }, {});

    setgroupedItemsInBasket(groupedItems)
  }, [items]);


  return (
    <View>
      <Text>Basket</Text>
    </View>
  );
};

export default Basket;
