import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestarantsCard from "./RestarantsCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type=="featured" && _id==$id]{
      ...,
      restaurants[] -> {
         ...,
         dishes[]->,
         type ->{
            name
         }
       }
   }[0] `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);


  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-3">
        <Text className="font-bold text-lg"> {title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* cards */}

        {restaurants.map((val) => {

          const {_id,image,address,name,dishes,rating,short_description,type} = val

          return(

          <RestarantsCard
            id={_id}
            key={_id}
            imgUrl={image}
            title={name}
            rating={rating}
            genre={type?.name}
            address={address}
            short_description={short_description}
            dishes={dishes}
            long={20}
            lat={0}
          />
          )
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
