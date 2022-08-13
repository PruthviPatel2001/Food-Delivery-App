import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';

import { SafeAreaView, Text, View } from "react-native";

import React from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const PrepareOrder = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(()=>{
           navigation.navigate("Delivery")
        },4000)
    }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderPrep.jpg")}
        animation="slideInUp"
        iterationCount={1}
        className="h-56 w-56 rounded-xl "
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-md my-10 text-white font-bold text-center"
      >
        Waiting for Restaturant to confirm your order !
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepareOrder;
