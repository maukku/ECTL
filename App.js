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
    var month = String(today.getMonth() + 1).padStart(2, '0');
		var sDay = String(today.getDate()-1).padStart(2, '0');
		var eDay = String(today.getDate()).padStart(2, '0');
    //var hours = today.getHours();
    var uri = `https://web-api.tp.entsoe.eu/api?securityToken=55700d76-0b49-47bc-9f0e-3c4d7b4b94bf&documentType=A44&In_Domain=10YFI-1--------U&Out_Domain=10YFI-1--------U&periodStart=${year}${month}${sDay}0000&periodEnd=${year}${month}${eDay}0000`;
		console.log(uri);
    await fetch(uri)
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

      <Text style={styles.textStyle}>
        {priceArray.map((price) => {
          return <Text>{price} </Text>;
        })}
      </Text>
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
