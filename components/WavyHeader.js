import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

//The SVG is displaying a dark blue color, is probably because it is applying the color of the Component itself.
export default function WavyHeader() {
  return (
    <View style={styles}>
       <View style={styles.box}>
        <Svg
          height={200}
          width={Dimensions.get("screen").width}
          viewBox="0 0 1440 320"
          fill="none"
        >
          <Path
            fill="#A6CEE3"
            d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </Svg>
      </View>
 
      
    </View>
  );
}

const styles = StyleSheet.create({

  box: {
    backgroundColor: "#A6CEE3",
    height: 80,
  },
});
