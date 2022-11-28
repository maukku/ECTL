import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
export const WelcomeText = ({ cost, percentage }) => {
  return (
    <View style={styles.container}>
      <Text>
        Hi, the price of electricity is currently 20% higher than average
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,

  },
});
