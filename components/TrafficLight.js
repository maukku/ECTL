import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function TrafficLight({ day, lowest, average, highest }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item1}>{lowest}</Text>
      <Text style={styles.item2}>{average}</Text>
      <Text style={styles.item3}>{highest}</Text>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "#A6CEE3",
    borderRadius: 30,
    width: 100,
    display: "flex",
  },
  text: { fontSize: 12, textAlign: "center", paddingTop: 10 },
  item1: {
    padding: 4,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 15,
    textAlign: "center",
    marginBottom: 5,
  },
  item2: {
    padding: 4,
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 15,
    textAlign: "center",
    marginBottom: 5,
  },
  item3: {
    padding: 4,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 15,
    textAlign: "center",
  },
});
