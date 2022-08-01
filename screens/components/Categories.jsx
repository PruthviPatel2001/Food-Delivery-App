import { ScrollView, StyleSheet, Text, View } from "react-native";

import CategoryCard from "./CategoryCard";
import React from "react";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Testing 1' />
      <CategoryCard imgUrl='https://links.papareact.com/gn7'  title='Testing 2' />
      <CategoryCard  imgUrl='https://links.papareact.com/gn7' title='Testing 3'/>
      <CategoryCard  imgUrl='https://links.papareact.com/gn7' title='Testing 3'/>
      <CategoryCard  imgUrl='https://links.papareact.com/gn7' title='Testing 3'/>
      <CategoryCard  imgUrl='https://links.papareact.com/gn7' title='Testing 3'/>

    </ScrollView>
  );
};

export default Categories;
