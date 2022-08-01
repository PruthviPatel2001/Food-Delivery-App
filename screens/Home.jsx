import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import React, { useLayoutEffect } from "react";

import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full "
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
          <Text className="font-bold text-xl">
            current location
            <View className="ml-3">
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* SearchBar  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput placeholder="Find Restaurants" keyboardType="default" />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

       {/* content  */}

       <ScrollView className="bg-gray-100 "
        contentContainerStyle ={{
            paddingBottom:100
        }}
       >
           {/* categories */}
           <Categories />

           {/* feature rows */}
           <FeaturedRow
            title="Featured"
            id={1}
            description = "Paid placements from our partners"
            featuredCategory = "Featured"
           />
            <FeaturedRow
            title="Offers for the day"
            id={2}

            description = "Exclusive offers! Grab it now..."
            featuredCategory = "Featured"
           />
            <FeaturedRow
            title="Famous Near You"
            id={3}

            description = "Must to have once"
            featuredCategory = "Featured"
           />
       </ScrollView>

    </SafeAreaView>
  );
};

export default Home;
