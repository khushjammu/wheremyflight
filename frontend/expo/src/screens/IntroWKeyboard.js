import React, { Component } from "react";

import { Center } from "@builderx/utils";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  DatePickerIOS,
  Alert,
  Dimensions
} from "react-native";
import SearchButton from "../symbols/SearchButton";
import { SearchBar } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import { Svg } from 'expo';
const { Circle, Rect } = Svg;

const { width, height } = Dimensions.get('window');

var js_lib = require("../../date_fns.min.js");

export default class IntroWKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: new Date()
    };

    this.setDate = this.setDate.bind(this);

  }

  setDate(newDate) {
    this.setState({ date: newDate });
  }


  onPress = () => {
    //window.alert(this.state.text);
    js_lib.format(this.state.date,"YYYYMMDD");

    if (this.state.text != "") {
      // var url ="http://178.128.25.234:5000/get_flights?date=" +js_lib.format(this.state.date,"YYYYMMDD") +"&flight_code=" +this.state.text;

    var url ="http://localhost:5000/get_flights?date=" +js_lib.format(this.state.date,"YYYYMMDD") +"&flight_code=" +this.state.text;

      fetch(url)
        .then(res => res.json())
        .then(res => {

          console.log(res);

          if (res['status'] === 'success') {
            if (res['data']['direction'] === 'arrival') {
              this.props.navigation.navigate("InfoPageSuccess", {
                flight_num: this.state.text, 
                origin: res['data']["arrival"]["from"],
                destination: "Singapore",
                terminal: "T" + res['data']["arrival"]["terminal"],
                date: new Intl.DateTimeFormat().format(new Date(this.state.date)),
                arrival_time: res['data']["arrival"]["estimatedTime"] != "" ? res['data']["arrival"]["estimatedTime"] : res['data']["arrival"]["scheduledTime"],
                belt_no: res['data']["arrival"]["belt"],
                status: res['data']["arrival"]["status"] != "" ? res['data']["arrival"]["status"] : "Scheduled"
              });
            } else if (res['data']['direction'] === 'departure') {
              this.props.navigation.navigate("InfoPageSuccess", {
                flight_num: this.state.text, 
                origin: "Singapore",
                destination: res['data']["departure"]["to"],
                terminal: "T" + res['data']["departure"]["terminal"],
                date: new Intl.DateTimeFormat().format(new Date(this.state.date)),
                arrival_time: res['data']["departure"]["estimatedTime"] != "" ? res['data']["departure"]["estimatedTime"] : res['data']["departure"]["scheduledTime"],
                belt_no: res['data']["departure"]["belt"],
                status: res['data']["departure"]["status"] != "" ? res['data']["departure"]["status"] : "Scheduled"
              });
            } else {
              Alert.alert(
                'Error!',
                "Flight entry found in both departures and arrivals. Please choose one.",
                [
                  {text: 'Arrivals', onPress: () => this.props.navigation.navigate("InfoPageSuccess", {flight_num: this.state.text, origin: res['data']["arrival"]["from"],destination: "Singapore",terminal: "T" + res['data']["arrival"]["terminal"],date: new Intl.DateTimeFormat().format(new Date(this.state.date)),arrival_time: res['data']["arrival"]["estimatedTime"] != "" ? res['data']["arrival"]["estimatedTime"] : res['data']["arrival"]["scheduledTime"],belt_no: res['data']["arrival"]["belt"],status: res['data']["arrival"]["status"] != "" ? res['data']["arrival"]["status"] : "Scheduled"})},
                  {text: 'Departures', onPress: () => this.props.navigation.navigate("InfoPageSuccess", {flight_num: this.state.text, origin: "Singapore", destination: res['data']["departure"]["to"],terminal: "T" + res['data']["departure"]["terminal"],date: new Intl.DateTimeFormat().format(new Date(this.state.date)),arrival_time: res['data']["departure"]["estimatedTime"] != "" ? res['data']["departure"]["estimatedTime"] : res['data']["departure"]["scheduledTime"],belt_no: res['data']["departure"]["belt"],status: res['data']["departure"]["status"] != "" ? res['data']["departure"]["status"] : "Scheduled"})}
                ],
                { cancelable: true }
              );
            }
          } else {
            Alert.alert(
              'Error!',
              res['status_message'],
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: true }
            );
          }

      }).catch(err =>  {
        console.log("error caught!")
        console.log(err)

        if (err == "Network request failed") {
          Alert.alert(
              'Error!',
              "No wifi connection detected! Please ensure device is connected to internet.",
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            );
        }
      });


    
    } else {
      Alert.alert(
        'Error!',
        'Flight number is empty. Please enter a flight number.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }

    
  };




  render() {

    return (
      <View style={styles.root}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/Gradient_t9eqeMB.png")} /*gradient: {"elipseLength":1,"from":{"x":"1.00","y":"1.04"},"gradientType":"LinearGradient","id":"6B44A2D0-D055-48E3-BF4A-D0F04CBE1B60","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(48,35,174,1)","style":{}},{"offset":0,"stopColor":"rgba(70,45,180,1)","style":{}},{"offset":1,"stopColor":"rgba(200,109,215,1)","style":{}}],"style":{},"to":{"x":"0.33","y":"0.34"}}*/
          
        />
        <Center horizontal>
          <Text style={styles.searchBox_Heading}>Enter flight #:</Text>
        </Center>
        {/* <Center horizontal> */}
          <View style={styles.searchBox}>
            <View style={styles.searchBox_Rectangle} />
            <Center vertical horizontal>
              <TextInput
                //style={{height: 40, borderColor: 'black', borderWidth: 1}}
                style={styles.searchBox_Field}
                autoCapitalize="characters"
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                selectionColor="rgba(0, 0, 0, 1.0)"
                autoFocus={true}
              />
            </Center>
          </View>
       {/* </Center> */}

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchButton} onPress={this.onPress}> 
            <SearchButton ref={search => this.search = search} style={styles.searchButton} onPress={this.onPress} />
          </TouchableOpacity>
        </View>

        <Center horizontal vertical>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate= {js_lib.format(js_lib.endOfYesterday(), 'YYYY-MM-DD')}
            maxDate= {js_lib.format(js_lib.endOfTomorrow(), 'YYYY-MM-DD')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateText:{
                color: '#ffffff'
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {this.setState({date: date})}}
        />
        
         </Center>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
    flex: 1
  },
  background: {
    position: "absolute",
    top: "0.00%",
    left: "0.00%",
    height: "100.00%",
    width: "100.00%",
    // backgroundColor: "red"
  },
  searchBox: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    // height: 51,
    // width: 143,
    width: wp(80),
    // top: 129,
    // position: "absolute"
  },
  searchBox_Heading: {
    position: "absolute",
    top: "9.90%",
    height: "3.60%",
    width: "32.8%",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "OpenSans-SemiBold"
  },
  searchBox_Field: {
    // top: "0%",
    // left: "0%",
    // width: 143,
    // height: "100%",
    // position: "absolute",
    backgroundColor: "transparent",
    fontSize: 35,
    fontFamily: "OpenSans-SemiBold",
    color: "rgba(0,0,0,1)",
    textAlign: "center"
  },
  searchBox_Rectangle: {
    // top: -20,
    // left: -63,
    width: 269,
    height: 90,
    // position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 8
  },
  searchButton: {
    top: "33.43%",
    // height: "6.45%",
    // width: "11.47%"
    justifyContent: 'center',
    height: 40,
    width: 40
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 10
  },
  date_bit: {
    flex: 1,
    justifyContent: "center"
  }
});
