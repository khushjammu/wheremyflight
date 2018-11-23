import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default class IntroWKeyboard extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ImageBackground
          style={styles.rectangle3}
          source={require("../assets/Gradient_t9eqeMB.png")} /*gradient: {"elipseLength":1,"from":{"x":"1.00","y":"1.04"},"gradientType":"LinearGradient","id":"6B44A2D0-D055-48E3-BF4A-D0F04CBE1B60","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(48,35,174,1)","style":{}},{"offset":0,"stopColor":"rgba(70,45,180,1)","style":{}},{"offset":1,"stopColor":"rgba(200,109,215,1)","style":{}}],"style":{},"to":{"x":"0.33","y":"0.34"}}*/
        />
        <Text style={styles.enterFlight}>Enter flight #:</Text>
        <View style={styles.rectangle2} />
        <Center horizontal>
          <Text style={styles.k459}>3K459</Text>
        </Center>
        <Svg
          viewBox="0 0 20.00 2.10"
          preserveAspectRatio="none"
          style={styles.line2}
        >
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            isClosed={false}
            d="M1.00 0.70 L18.00 0.70 "
          />
        </Svg>
        <View style={styles.searchButton}>
          <Svg
            viewBox="0 0 43.00 43.00"
            preserveAspectRatio="none"
            style={styles.oval}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M21.50 43.00 C33.37 43.00 43.00 33.37 43.00 21.50 C43.00 9.63 33.37 0.00 21.50 0.00 C9.63 0.00 0.00 9.63 0.00 21.50 C0.00 33.37 9.63 43.00 21.50 43.00 Z"
            />
          </Svg>
          <View style={styles.baselineSearch24Px}>
            <Svg
              viewBox="0 0 17.49 17.49"
              preserveAspectRatio="none"
              style={styles.shape}
            >
              <Path
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                isClosed={true}
                d="M17.49 16.00 L16.00 17.49 L11.00 12.50 L11.00 11.71 L10.73 11.43 C10.73 11.43 8.11 13.00 6.50 13.00 C2.91 13.00 0.00 10.09 0.00 6.50 C0.00 2.91 2.91 0.00 6.50 0.00 C10.09 0.00 13.00 2.91 13.00 6.50 C13.00 8.11 11.43 10.73 11.43 10.73 L11.71 11.00 L12.50 11.00 L17.49 16.00 Z M11.00 6.50 C11.00 4.01 8.99 2.00 6.50 2.00 C4.01 2.00 2.00 4.01 2.00 6.50 C2.00 8.99 4.01 11.00 6.50 11.00 C8.99 11.00 11.00 8.99 11.00 6.50 Z"
              />
            </Svg>
            <Svg
              viewBox="0 0 24.00 24.00"
              preserveAspectRatio="none"
              style={styles.shape1}
            >
              <Path
                strokeWidth={0}
                fill="transparent"
                isClosed={true}
                d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 L0.00 0.00 Z"
              />
            </Svg>
          </View>
        </View>
        <View style={styles.baselineArrowRightAlt24Px}>
          <Svg
            viewBox="0 0 32.00 32.00"
            preserveAspectRatio="none"
            style={styles.shape2}
          >
            <Path
              strokeWidth={0}
              fill="transparent"
              isClosed={true}
              d="M0.00 0.00 L32.00 0.00 L32.00 32.00 L0.00 32.00 L0.00 0.00 Z"
            />
          </Svg>
          <Svg
            viewBox="0 0 21.00 11.00"
            preserveAspectRatio="none"
            style={styles.shape3}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              isClosed={true}
              d="M15.76 4.13 L0.00 4.13 L0.00 6.88 L15.76 6.88 L15.76 11.00 L21.00 5.50 L15.76 0.00 L15.76 4.13 Z"
            />
          </Svg>
        </View>
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
  },
  k459: {
    position: "absolute",
    top: "19.27%",
    height: "7.65%",
    width: 143,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 48,
    fontFamily: "OpenSans-SemiBold"
  },
  line2: {
    position: "absolute",
    height: "0.16%",
    width: "5.07%",
    top: "25.86%",
    left: "66.53%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  searchButton: {
    position: "absolute",
    top: "33.43%",
    left: "44.27%",
    height: "6.45%",
    width: "11.47%"
  },
  oval: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  baselineSearch24Px: {
    position: "absolute",
    top: "23.26%",
    left: "23.26%",
    height: "55.81%",
    width: "55.81%"
  },
  shape: {
    position: "absolute",
    height: "72.87%",
    width: "72.87%",
    top: "12.50%",
    left: "12.50%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape1: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  baselineArrowRightAlt24Px: {
    position: "absolute",
    top: "34.33%",
    left: "45.87%",
    height: "4.80%",
    width: "8.53%",
    display: "none"
  },
  shape2: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape3: {
    position: "absolute",
    height: "34.38%",
    width: "65.63%",
    top: "34.38%",
    left: "15.63%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
