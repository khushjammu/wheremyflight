import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class Intro extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ImageBackground
          style={styles.rectangle3}
          source={require("../assets/Gradient_WihTEQY.png")} /*gradient: {"elipseLength":1,"from":{"x":"1.00","y":"1.04"},"gradientType":"LinearGradient","id":"64039729-4C26-48B3-B337-9B1B9C0FADD1","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(48,35,174,1)","style":{}},{"offset":0,"stopColor":"rgba(70,45,180,1)","style":{}},{"offset":1,"stopColor":"rgba(200,109,215,1)","style":{}}],"style":{},"to":{"x":"0.33","y":"0.34"}}*/
        />
        <Text style={styles.enterFlight}>Enter flight #:</Text>
        <View style={styles.rectangle2} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rectangle3: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    backgroundColor: "transparent"
  },
  enterFlight: {
    position: "absolute",
    top: "9.90%",
    left: "33.60%",
    height: "3.60%",
    width: "33.07%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "OpenSans-SemiBold"
  },
  rectangle2: {
    position: "absolute",
    top: "16.34%",
    left: "14.13%",
    height: "13.49%",
    width: "71.73%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)"
  }
});
