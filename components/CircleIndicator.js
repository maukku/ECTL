import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const PriceIndicator = ({ value, altColor, color }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleshadow}>
        <LinearGradient
          // Background Linear Gradient
          colors={[altColor, color]}
          style={styles.circle}
          justifyContent="center"
        >
          <Text style={styles.buttonText}>{value}€ per kwh</Text>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  circleshadow: {
    borderRadius: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width * 0.5 + 2,
    height: Dimensions.get("window").width * 0.5 + 3,
    backgroundColor: "transparent",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    textShadowColor: "gray",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  circle: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    borderColor: "white",
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
  },
});
export default PriceIndicator;
