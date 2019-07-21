import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  LayoutAnimation,
  StatusBar
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DatePicker from "react-native-datepicker";


export default class PayalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <StatusBar hidden />

        <View style={styles.header}>
          <Text style={styles.headerText}>SHOOT RECORD</Text>
        </View>

        <View style={styles.prompt}>
          <Text style={styles.promptText}>Input Shoot Completed</Text>
        </View>

        <View style={styles.input}>
          <TextInput style={styles.inputTextInput}>Input Shoot Completed</TextInput>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FEFDE4",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  header: {
    marginTop: hp(8),
    flexDirection: 'column',
    alignContent: 'center'
  },
  headerText: {
    fontSize: 40,
    fontFamily: "OpenSans-SemiBold",
    color: "black",
    textAlign: 'center'
  },
  prompt: {
    marginTop: hp(5),
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'

  },
  promptText: {
    fontSize: 20,
    fontFamily: "OpenSans-Regular",
    color: "black",
    textAlign: 'center',
  },
  input: {
    marginTop: hp(5),
    // borderStyle: 'dotted',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'

  },
  inputTextInput: {
    fontSize: 20,
    fontFamily: "OpenSans-Regular",
    color: "black",
    textAlign: 'center',
  }
});

