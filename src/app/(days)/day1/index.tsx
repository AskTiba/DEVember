import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />

      <Text
        style={{
          fontFamily: "RubikGlitchPop",
          fontSize: 38,
          color: "#32cd32"
        }}
      >
        Day Details Screen
      </Text>
    </View>
  );
};

export default DayDetailsScreen;
