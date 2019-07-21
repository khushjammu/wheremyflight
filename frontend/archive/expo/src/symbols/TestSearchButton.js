import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, StyleSheet, Dimensions } from "react-native";

import { Svg } from 'expo';
const { Circle, Rect } = Svg;

const { width, height } = Dimensions.get('window');

export default class TestSearchButton extends Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}>
        <Svg height={height * 0.5} width={width * 0.5} viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </View>
    );
  }
}