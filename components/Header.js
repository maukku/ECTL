import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WavyHeader from "../components/WavyHeader";

export default function Header() {
  return (
    <View style={styles.container}>
      <WavyHeader></WavyHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    padding: 0,
  },
});
