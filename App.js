import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  let color;
  let value;
  let altColor;
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
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.shadow}>
        <LinearGradient
        // Background Linear Gradient
        colors={[altColor, color]}
        style={styles.circle}
        justifyContent= 'center'
        >
        <Text style={{fontSize: 20,textAlign: 'center', color: 'white', textShadowColor: 'gray', textShadowOffset: {width: 1, height: 1}, textShadowRadius: 4}}>{value}€ per kWh</Text>
        </LinearGradient>
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
    justifyContent: 'center',
  },
  bar: {
    height: 20,
  },

  circle: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    borderColor: 'white',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
  },

  shadow: {
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
  }
});
