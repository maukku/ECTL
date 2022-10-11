import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export default function App() {
  let color;
  let value;
  let altColor;
  let url = "";
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
