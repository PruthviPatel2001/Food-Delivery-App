import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import sanityClient, { urlFor } from "../sanity";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        ` 
      *[_type == "category"]
       
      `
      )
      .then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories.map((val) => {
        const { _id, image ,name} = val;

        return (
          <CategoryCard
            key={_id}
            imgUrl={urlFor(image).width(200).url()}
            title={name}
          />
        );
      })}

    </ScrollView>
  );
};

export default Categories;
