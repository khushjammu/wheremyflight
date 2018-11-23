import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

export default class InfoPageSuccess extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ImageBackground
          style={styles.rectangle3}
          source={require("../assets/Gradient_ZFQeXoR.png")} /*gradient: {"elipseLength":1,"from":{"x":"1.00","y":"1.04"},"gradientType":"LinearGradient","id":"75094590-72DF-44F9-ADFE-BF77A4A7CD43","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(48,35,174,1)","style":{}},{"offset":0,"stopColor":"rgba(70,45,180,1)","style":{}},{"offset":1,"stopColor":"rgba(200,109,215,1)","style":{}}],"style":{},"to":{"x":"0.33","y":"0.34"}}*/
        />
        <View style={styles.infoHolder}>
          <View style={styles.plate} />
          <Text style={styles.singapore}>Singapore</Text>
          <View style={styles.info}>
            <View style={styles.belt}>
              <Text style={styles.style}>39</Text>
              <View style={styles.briefcase}>
                <Svg
                  viewBox="0 0 20.00 19.00"
                  preserveAspectRatio="none"
                  style={styles.shape}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(0,0,0,1)"
                    isClosed={true}
                    d="M8.00 0.00 L12.00 0.00 L14.00 2.00 L14.00 4.00 L18.00 4.00 L20.00 6.00 L20.00 17.00 L18.00 19.00 L2.00 19.00 L0.00 17.00 L0.00 6.00 L2.00 4.00 L6.00 4.00 L6.00 2.00 L8.00 0.00 Z M12.00 4.00 L12.00 2.00 L8.00 2.00 L8.00 4.00 L12.00 4.00 Z"
                  />
                </Svg>
              </View>
            </View>
            <View style={styles.date}>
              <Text style={styles.style1}>20/11/18</Text>
              <View style={styles.clock}>
                <Svg
                  viewBox="0 0 20.00 20.00"
                  preserveAspectRatio="none"
                  style={styles.shape1}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(0,0,0,1)"
                    isClosed={true}
                    d="M20.00 10.00 C20.00 15.52 15.52 20.00 9.99 20.00 C4.47 20.00 0.00 15.52 0.00 10.00 C0.00 4.48 4.47 0.00 9.99 0.00 C15.52 0.00 20.00 4.48 20.00 10.00 Z M18.00 10.00 C18.00 5.58 14.42 2.00 10.00 2.00 C5.58 2.00 2.00 5.58 2.00 10.00 C2.00 14.42 5.58 18.00 10.00 18.00 C14.42 18.00 18.00 14.42 18.00 10.00 Z"
                  />
                </Svg>
                <Svg
                  viewBox="0 0 24.00 24.00"
                  preserveAspectRatio="none"
                  style={styles.shape2}
                >
                  <Path
                    strokeWidth={0}
                    fill="transparent"
                    isClosed={true}
                    d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 L0.00 0.00 Z"
                  />
                </Svg>
                <Svg
                  viewBox="0 0 6.00 9.15"
                  preserveAspectRatio="none"
                  style={styles.shape3}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(0,0,0,1)"
                    isClosed={true}
                    d="M1.50 0.00 L0.00 0.00 L0.00 6.00 L5.25 9.15 L6.00 7.92 L1.50 5.25 L1.50 0.00 Z"
                  />
                </Svg>
              </View>
            </View>
            <View style={styles.arrivalTime}>
              <Text style={styles.pm}>1:10pm</Text>
              <Image
                source={require("../assets/89e3078289fd51620d169976036c943debf7ebcb.png")}
                style={styles.bitmap}
              />
            </View>
            <View style={styles.terminal1}>
              <Text style={styles.t1}>T1</Text>
              <View style={styles.buildingIcon}>
                <Svg
                  viewBox="0 0 24.00 24.00"
                  preserveAspectRatio="none"
                  style={styles.shape4}
                >
                  <Path
                    strokeWidth={0}
                    fill="transparent"
                    isClosed={true}
                    d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 L0.00 0.00 Z"
                  />
                </Svg>
                <Svg
                  viewBox="0 0 20.00 18.00"
                  preserveAspectRatio="none"
                  style={styles.shape5}
                >
                  <Path
                    strokeWidth={0}
                    fill="rgba(0,0,0,1)"
                    isClosed={true}
                    d="M20.00 4.00 L20.00 18.00 L0.00 18.00 L0.00 0.00 L10.00 0.00 L10.00 4.00 L20.00 4.00 Z M4.00 14.00 L2.00 14.00 L2.00 16.00 L4.00 16.00 L4.00 14.00 Z M4.00 10.00 L2.00 10.00 L2.00 12.00 L4.00 12.00 L4.00 10.00 Z M4.00 6.00 L2.00 6.00 L2.00 8.00 L4.00 8.00 L4.00 6.00 Z M4.00 2.00 L2.00 2.00 L2.00 4.00 L4.00 4.00 L4.00 2.00 Z M8.00 14.00 L6.00 14.00 L6.00 16.00 L8.00 16.00 L8.00 14.00 Z M8.00 10.00 L6.00 10.00 L6.00 12.00 L8.00 12.00 L8.00 10.00 Z M8.00 6.00 L6.00 6.00 L6.00 8.00 L8.00 8.00 L8.00 6.00 Z M8.00 2.00 L6.00 2.00 L6.00 4.00 L8.00 4.00 L8.00 2.00 Z M18.00 6.00 L10.00 6.00 L10.00 8.00 L12.00 8.00 L12.00 10.00 L10.00 10.00 L10.00 12.00 L12.00 12.00 L12.00 14.00 L10.00 14.00 L10.00 16.00 L18.00 16.00 L18.00 6.00 Z M16.00 10.00 L14.00 10.00 L14.00 8.00 L16.00 8.00 L16.00 10.00 Z M16.00 14.00 L14.00 14.00 L14.00 12.00 L16.00 12.00 L16.00 14.00 Z"
                  />
                </Svg>
              </View>
            </View>
          </View>
          <Text style={styles.onTime}>ON-TIME</Text>
          <Svg
            viewBox="0 0 2.10 127.00"
            preserveAspectRatio="none"
            style={styles.line3}
          >
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(0,0,0,1)"
              isClosed={false}
              d="M0.75 1.00 L0.75 125.00 "
            />
          </Svg>
          <Text style={styles.shanghai}>Shanghai{"\n"}</Text>
        </View>
        <View style={styles.flightHolder}>
          <View style={styles.rectangle2} />
          <Text style={styles.k459}>3K459</Text>
        </View>
        <Svg
          viewBox="0 0 2.10 84.00"
          preserveAspectRatio="none"
          style={styles.line}
        >
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(151,151,151,1)"
            isClosed={false}
            d="M0.75 1.00 L0.75 82.00 "
          />
        </Svg>
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
  infoHolder: {
    position: "absolute",
    top: "26.39%",
    left: "9.87%",
    height: "68.67%",
    width: "80.27%"
  },
  plate: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)"
  },
  singapore: {
    position: "absolute",
    top: "41.92%",
    left: "30.90%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "OpenSans-SemiBold"
  },
  info: {
    position: "absolute",
    top: "63.54%",
    left: "4.98%",
    height: "15.28%",
    width: "87.04%"
  },
  belt: {
    position: "absolute",
    top: "62.86%",
    left: "60.31%",
    height: "34.29%",
    width: "20.99%"
  },
  style: {
    position: "absolute",
    top: "0.00%",
    left: "61.82%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "OpenSans-SemiBold"
  },
  briefcase: {
    position: "absolute",
    top: "12.50%",
    left: "0.00%",
    height: "79.17%",
    width: "36.36%"
  },
  shape: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  date: {
    position: "absolute",
    top: "62.86%",
    left: "0.00%",
    height: "37.14%",
    width: "43.51%"
  },
  style1: {
    position: "absolute",
    top: "0.00%",
    left: "33.33%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "OpenSans-SemiBold"
  },
  clock: {
    position: "absolute",
    top: "7.69%",
    left: "0.00%",
    height: "92.31%",
    width: "21.05%"
  },
  shape1: {
    position: "absolute",
    height: "83.33%",
    width: "83.33%",
    top: "8.33%",
    left: "8.33%",
    backgroundColor: "transparent",
    borderColor: "transparent"
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
    height: "38.12%",
    width: "25.00%",
    top: "29.17%",
    left: "45.83%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  arrivalTime: {
    position: "absolute",
    top: "0.00%",
    left: "58.02%",
    height: "54.29%",
    width: "41.98%"
  },
  pm: {
    position: "absolute",
    top: "13.16%",
    left: "40.91%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "OpenSans-SemiBold"
  },
  bitmap: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "34.55%",
    backgroundColor: "transparent"
  },
  terminal1: {
    position: "absolute",
    top: "10.00%",
    left: "0.00%",
    height: "34.29%",
    width: "22.52%"
  },
  t1: {
    position: "absolute",
    top: "0.00%",
    left: "64.41%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "OpenSans-SemiBold"
  },
  buildingIcon: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "40.68%"
  },
  shape4: {
    position: "absolute",
    height: "100.00%",
    width: "100.00%",
    top: "0.00%",
    left: "0.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape5: {
    position: "absolute",
    height: "75.00%",
    width: "83.33%",
    top: "12.50%",
    left: "8.33%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  onTime: {
    position: "absolute",
    top: "53.71%",
    left: "40.20%",
    backgroundColor: "transparent",
    color: "rgba(126,211,33,1)",
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold"
  },
  line3: {
    position: "absolute",
    height: "27.51%",
    width: "0.37%",
    top: "14.52%",
    left: "50.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shanghai: {
    position: "absolute",
    top: "6.33%",
    left: "30.90%",
    height: "8.30%",
    width: "38.21%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "OpenSans-SemiBold"
  },
  flightHolder: {
    position: "absolute",
    top: "8.70%",
    left: "14.13%",
    height: "13.49%",
    width: "71.73%"
  },
  rectangle2: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,1)"
  },
  k459: {
    position: "absolute",
    top: "12.22%",
    left: "23.42%",
    height: "72.22%",
    width: "53.16%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 48,
    fontFamily: "OpenSans-SemiBold"
  },
  line: {
    position: "absolute",
    height: "12.44%",
    width: "0.29%",
    top: "69.79%",
    left: "50.00%",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
