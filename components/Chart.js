import * as React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Chart({ priceArray }) {
  return (
    <View style={styles.container}>
      <LineChart
        withInnerLines={true}
        withOuterLines={false}
        data={{
          labels: ["6:00 AM", "12:00 PM", "6:00 PM", "12:00 AM"],
          datasets: [
            {
              data: priceArray,
            },
          ],
        }}
        width={Dimensions.get("window").width-20} // from react-native
        height={220}
        yAxisSuffix="€"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#A6CEE3",
          backgroundGradientFrom: "#A6CEE3",
          backgroundGradientTo: "#A6CEE3",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(5, 100, 150, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 5,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "white",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 8,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});
