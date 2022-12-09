import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Chart from "./components/Chart";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { parse } from "fast-xml-parser";
import Header from "./components/Header";
import CircleIndicator from "./components/CircleIndicator";
import { WelcomeText } from "./components/WelcomeText";
import { SafeAreaView } from "react-native-safe-area-context";
import TrafficLight from "./components/TrafficLight";

import { XMLParser } from "fast-xml-parser";
const parser = new XMLParser();
const App = () => {
  const [currentDate, setCurrentDate] = useState("");

  let color;
  let value;
  let altColor;
  const [price, setPrice] = useState(5);
  const [priceArray, setPriceArray] = useState([1.5]);
  let electricityPrices = new Array(12);
  // Used to test color settings until API is set up and cost ranges determined
  value = Math.floor(Math.random() * 100) + 1;

  // May replace this with a switch statement
  if (value <= 40) {
    color = "green";
    altColor = "lightgreen";
  } else if (value > 40 && value < 80) {
    color = "orange";
    altColor = "lightyellow";
  } else {
    color = "red";
    altColor = "lightpink";
  }

  const getData = async () => {
    const { XMLParser } = require("fast-xml-parser");
    const options = {
      ignoreAttributes: false,
    };
    const parser = new XMLParser(options);

    const today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var hours = today.getHours();

    const link = `https://web-api.tp.entsoe.eu/api?securityToken=55700d76-0b49-47bc-9f0e-3c4d7b4b94bf&documentType=A44&In_Domain=10YFI-1--------U&Out_Domain=10YFI-1--------U&periodStart=${year}${month}${
      day - 1
    }${hours}00&periodEnd=${year}${month}${day}${hours}00`;
    await fetch(link)
      .then((response) => response.text())
      .then((textResponse) => {
        let initialResponse = parser.parse(textResponse);
        let jsonStringOfCurrentDayArray = JSON.stringify(
          initialResponse.Publication_MarketDocument.TimeSeries[1].Period.Point
        );
        const regexToReplacePriceAmount = /price.amount/gi;
        jsonStringOfCurrentDayArray = jsonStringOfCurrentDayArray.replace(
          regexToReplacePriceAmount,
          "amount"
        );
        let newJsonObject = JSON.parse(jsonStringOfCurrentDayArray);
        console.log(link);
        for (let i = 0; i < 12; i++) {
          electricityPrices[i] = newJsonObject[i].amount;
        }
        setPriceArray(electricityPrices);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <View style={styles.mainInfo}>
        <CircleIndicator altColor={altColor} value={value} color={color} />
        <WelcomeText />
      </View>
      <View style={styles.chart}>
        <Chart priceArray={priceArray} />
      </View>

      <Text style={styles.textStyle}>{currentDate}</Text>

      {/*   <Text style={styles.textStyle}>
        {priceArray.map((price) => {
          return <Text>{price} </Text>;
        })}
      </Text> */}
      <View style={styles.TrafficLight}>
        <TrafficLight  lowest ={"0.10"}  average={"0.15"} highest={"0.20"}   day={"Yesterday"} />
        <TrafficLight lowest ={"0.12"}  average={"0.17"} highest={"0.22"} day={"Today"} />
        <TrafficLight lowest ={"0.22"}  average={"0.35"} highest={"0.50"}  day={"Tomorrow"}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  chart: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  TrafficLight: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around'

  },

  mainInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",

    marginBottom: 0,
  },
});

export default App;
