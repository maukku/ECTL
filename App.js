import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

export default function App() {
  return <Text>HELLOOOOOw??</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  bar: {
    height: 20,
  },
  introduction: {
    fontSize: 40,
    textAlign: "left",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingBottom: 80,
    // position: 'top',
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
  priceSummary: {
    padding: 50,
  },
  barGraph: {
    padding: 50,
  },
});
