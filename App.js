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

import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { parse } from "fast-xml-parser";
import Header from "./components/Header";
import CircleIndicator from "./components/CircleIndicator";
import { WelcomeText } from "./components/WelcomeText";
import { SafeAreaView } from "react-native-safe-area-context";

import { XMLParser } from 'fast-xml-parser';
const parser = new XMLParser();
const App = () => {
  const [currentDate, setCurrentDate] = useState("");

  let color;
  let value;
  let altColor;
  const [price, setPrice] = useState(5);
  const [priceArray, setPriceArray] = useState([1.5]);
  let electricityPrices = new Array(24);
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

    await fetch(
      `https://web-api.tp.entsoe.eu/api?securityToken=55700d76-0b49-47bc-9f0e-3c4d7b4b94bf&documentType=A44&In_Domain=10YFI-1--------U&Out_Domain=10YFI-1--------U&periodStart=${year}${month}${day-1}${hours}00&periodEnd=${year}${month}${day}${hours}00`
    )
      .then((response) => response.text())
      .then((textResponse) => {
        let initialResponse = parser.parse(textResponse);
        let jsonStringOfCurrentDayArray = JSON.stringify(initialResponse.Publication_MarketDocument.TimeSeries[1].Period.Point);
        const regexToReplacePriceAmount = /price.amount/gi;
        jsonStringOfCurrentDayArray = jsonStringOfCurrentDayArray.replace(regexToReplacePriceAmount,"amount");
        let newJsonObject = JSON.parse(jsonStringOfCurrentDayArray);
        
         for(let i = 0; i < newJsonObject.length; i++) {
          electricityPrices[i] = newJsonObject[i].amount;
        } 
        setPriceArray(electricityPrices);
      });      
  };

  useEffect(() => {
    const fetchData = async () => {
      // 		const today = new Date()
      // 		console.log("today" + today)
      // 		const yesterday = new Date()
      // 		yesterday.setDate(yesterday.getDate() - 1)
      // 		console.log("yesterday" + yesterday)
      // 		const responseOld = await axios.get(
      // 			`https://api.fingrid.fi/v1/variable/106/events/json?start_time=${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}T${yesterday.getHours()}%3A00%3A00Z&end_time=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}T${today.getHours()}%3A00%3A00Z`,
      // 			{ headers: { header1: 'x-api-key: GN8JOZSHEWacz3RErMnYA3kOaY8p3vM6a4a2FV8s' } }
      // 		);
      // 		/*const response = await axios.get(
      // 			`https://web-api.tp.entsoe.eu/api?securityToken=55700d76-0b49-47bc-9f0e-3c4d7b4b94bf&documentType=A44&In_Domain=10YFI-1--------U&Out_Domain=10YFI-1--------U&periodStart=202210110600&periodEnd=202210121500`,
      // 		);
      // 		const response = fetch('https://web-api.tp.entsoe.eu/api?securityToken=55700d76-0b49-47bc-9f0e-3c4d7b4b94bf&documentType=A44&In_Domain=10YFI-1--------U&Out_Domain=10YFI-1--------U&periodStart=202210110600&periodEnd=202210121500')
      // .then(e => console.log(e));*/
      // 		const data = responseOld.data
      // 		console.log(responseOld.data)
      // 		if (data.length > 0) {
      // 			setPrice(data[data.length - 2].value);
      // 		}
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <View style={styles.mainInfo}>
        <CircleIndicator altColor={altColor} value={value} color={color} />
        <WelcomeText />
      </View>
      <Text style={styles.textStyle}>{currentDate}</Text>
      <Button title="Refresh" onPress={() => getData()}> </Button>
      <Text style={styles.textStyle}>{priceArray}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  mainInfo: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
