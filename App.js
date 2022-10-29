import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useEffect,useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export default function App() {
  let color;
  let value;
  let altColor;
  let url = "";
  const [ price, setPrice ] = useState(5);
  let userName = "John";
  // Used to test color settings until API is set up and cost ranges determined
  value = Math.floor(Math.random() * 100) + 1;

    // May replace this with a switch statement
  if (value <= 40) {
    color = 'green';
    altColor = 'lightgreen';
  }
  else if (value > 40 && value < 80) {
    color = 'orange';
    altColor = 'lightyellow';
  }
  else {
    color = 'red';
    altColor = 'lightpink';
  };

  const getDayPrice = () => {
    axios
      .get({url})
  };

  useEffect(() => {
		const fetchData = async () => {
			const today = new Date();
			console.log("today" + today);
			const yesterday = new Date();
			yesterday.setDate(yesterday.getDate() - 1);
			console.log("yesterday" + yesterday);
			const responseOld = await axios.get(
				`https://api.fingrid.fi/v1/variable/106/events/json?start_time=${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}T${yesterday.getHours()}%3A00%3A00Z&end_time=${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}T${today.getHours()}%3A00%3A00Z`,
				{ headers: { header1: 'x-api-key: GN8JOZSHEWacz3RErMnYA3kOaY8p3vM6a4a2FV8s' } }
			);
			/*const response = await axios.get(
				`https://web-api.tp.entsoe.eu/api?securityToken=55700d76-0b49-47bc-9f0e-3c4d7b4b94bf&documentType=A44&In_Domain=10YFI-1--------U&Out_Domain=10YFI-1--------U&periodStart=202210110600&periodEnd=202210121500`,
			);
			const response = fetch('https://web-api.tp.entsoe.eu/api?securityToken=55700d76-0b49-47bc-9f0e-3c4d7b4b94bf&documentType=A44&In_Domain=10YFI-1--------U&Out_Domain=10YFI-1--------U&periodStart=202210110600&periodEnd=202210121500')
  .then(e => console.log(e));*/
			const data = responseOld.data;
			console.log(responseOld);
			if (data.length > 0) {
				setPrice(data[data.length - 2].value);
			}
		};
		const loadDummyData = () => {
			setPrice(0);
		};
		fetchData();
		//loadDummyData();
	}, []);
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        {/* Display data */}
        <Text style={styles.introduction}>
          Good Morning, {userName}.
        </Text>
      </View>

      <View style={styles.circleshadow}>
        <LinearGradient
        // Background Linear Gradient
        colors={[altColor, color]}
        style={styles.circle}
        justifyContent= 'center'
        >
        <Text
        style={styles.buttonText}>{value}€ per kWh</Text>
        </LinearGradient>
      </View>

      <View>
        {/* Display data */}
        <Text style={styles.priceSummary}>
          {userName}, the price of electricity is currently average
          </Text>
      </View>

      <View>
        {/* Display data */}
        <Text>
          (((((((   Insert bar graph here   )))))))
          </Text>
      </View>

      {/* <View
        style={[styles.bar, { width: value * 1.5, backgroundColor: color }]}
      /> */}
<div  
							style={{
								backgroundColor: 'green',
								padding: 40,
								color: 'white'
							}}
						>
							<div>Current electricity price: {price}€/MWh</div>
						</div>	
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  bar: {
    height: 20,
  },
  introduction: {
    fontSize: 40,
    textAlign: 'left',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 80,
    // position: 'top',
  },
  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    borderColor: 'white',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
  },

  circleshadow: {
    borderRadius: (Dimensions.get('window').width) / 2,
    width: (Dimensions.get('window').width * 0.5) + 2,
    height: (Dimensions.get('window').width * 0.5) + 3,
    backgroundColor: 'transparent',
    shadowColor: 'black',
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
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'gray',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  priceSummary: {
    padding: 50,
  },
  barGraph: {
    padding: 50,
  }
});
