import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ArrowRightIcon } from "react-native-heroicons/outline";
import React from "react";
import RestarantsCard from "./RestarantsCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
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
        <RestarantsCard
          id={123}
          imgUrl="https://images.unsplash.com/photo-1631452180539-96aca7d48617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          title="Olive Pizza"
          rating="4.5"
          genre="Italian"
          address="Gotri , Vadodara"
          short_description="Authentic Pizza"
          dishes={[]}
          long={20}
          lat={0}
        />
              <RestarantsCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Olive Pizza"
          rating="4.5"
          genre="Italian"
          address="Gotri , Vadodara"
          short_description="Authentic Pizza"
          dishes={[]}
          long={20}
          lat={0}
        />
              <RestarantsCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Olive Pizza"
          rating="4.5"
          genre="Italian"
          address="Gotri , Vadodara"
          short_description="Authentic Pizza"
          dishes={[]}
          long={20}
          lat={0}
        />
              <RestarantsCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Olive Pizza"
          rating="4.5"
          genre="Italian"
          address="Gotri , Vadodara"
          short_description="Authentic Pizza"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
