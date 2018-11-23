import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default class SearchButton extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 43,
    height: 43
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Svg
          style={styles.oval}
          viewBox="0 0 43.00 43.00"
          preserveAspectRatio="none"
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
            style={styles.shape}
            viewBox="0 0 17.49 17.49"
            preserveAspectRatio="none"
          >
            <Path
              strokeWidth={0}
              fill="rgba(0,0,0,1)"
              isClosed={true}
              d="M17.00 15.55 L15.55 17.00 L10.69 12.15 L10.69 11.38 L10.43 11.11 C10.43 11.11 7.88 12.64 6.32 12.64 C2.83 12.64 0.00 9.81 0.00 6.32 C0.00 2.83 2.83 0.00 6.32 0.00 C9.81 0.00 12.64 2.83 12.64 6.32 C12.64 7.88 11.11 10.43 11.11 10.43 L11.38 10.69 L12.15 10.69 L17.00 15.55 Z M10.69 6.32 C10.69 3.90 8.74 1.94 6.32 1.94 C3.90 1.94 1.94 3.90 1.94 6.32 C1.94 8.74 3.90 10.69 6.32 10.69 C8.74 10.69 10.69 8.74 10.69 6.32 Z"
            />
          </Svg>
          <Svg
            style={styles.shape1}
            viewBox="0 0 24.00 24.00"
            preserveAspectRatio="none"
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
    );
  }
}
const styles = StyleSheet.create({
  oval: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  baselineSearch24Px: {
    top: "23.26%",
    left: "23.26%",
    width: "55.81%",
    height: "55.81%",
    position: "absolute"
  },
  shape: {
    top: "12.50%",
    left: "12.50%",
    width: "72.87%",
    height: "72.87%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  shape1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
