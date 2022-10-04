import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  let color;
  let value;

  // Used to test color settings until API is set up and cost ranges determined
  value = Math.floor(Math.random() * 100) + 1;

    // May replace this with a switch statement
  if (value <= 40) {
    color = 'green';
  }
  else if (value > 40 && value < 80) {
    color = 'orange';
  }
  else color = 'red';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <LinearGradient
        // Background Linear Gradient
        colors={[color, 'transparent']}
        style={styles.circle}
        justifyContent= 'center'>
      <Text style={{fontSize: 20,textAlign: 'center', color: 'white'}}>{value}</Text>
      </LinearGradient>

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
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
  },
});
