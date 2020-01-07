import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var date_fns = require("../libraries/date_fns.min.js");
// import moment from 'moment';


import Icon from "../libraries/icon.js";
import PaperPlaneSVG from "../symbols/PaperPlane";


export default class NewInfoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flightNo: this.props.navigation.getParam("flightNo","NO-ID"),
      from: this.props.navigation.getParam("from","NO-ID"),
      to: this.props.navigation.getParam("to","NO-ID"),
      scheduledDatetime: this.props.navigation.getParam("scheduledDatetime","NO-ID"),
      scheduledDate: null,
      scheduledTime: null,
      estimatedDate: this.props.navigation.getParam("estimatedDate","NO-ID"),
      estimatedTime: this.props.navigation.getParam("estimatedTime","NO-ID"),
      belt: this.props.navigation.getParam("belt","NO-ID"),
      gate: this.props.navigation.getParam("gate","NO-ID"),
      status: this.props.navigation.getParam("status","NO-ID"),
      terminal: this.props.navigation.getParam("terminal","NO-ID")
    }

    // this.state = {
    //   "belt": "42",
    //   "estimatedDate": "-",
    //   "estimatedTime": "-",
    //   "flightNo": "GA840",
    //   "from": "Bali-Denpasar",
    //   "gate": "NO-ID",
    //   "scheduledDate": null,
    //   "scheduledDatetime": "20200107 10:00:00",
    //   "scheduledTime": null,
    //   "status": "",
    //   "terminal": "3",
    //   "to": "Singapore",
    // }

    if (this.state.to === "NO-ID") {
      this.state.to = "Singapore"
    } else if (this.state.from === "NO-ID") {
      this.state.from = "Singapore"
    }

    console.log(this.state)
    this._handle_scheduled_datetime()
    this._handle_estimated_datetime()
    this._handle_luggage_belt()
    this._arrival_or_departure()
  }


  _handle_scheduled_datetime() {
    console.log("original")
    console.log(this.state.scheduledDatetime)
    let a = date_fns.parse(this.state.scheduledDatetime, 'yyyyMMdd HH:mm:ss', new Date())
    // let a = moment(this.state.scheduledDatetime, "YYYYMMDD HH:mm:ss")
    console.log("parsed")
    console.log(a)
    this.state.scheduledDate = date_fns.format(a, 'Do MMM.')
    this.state.scheduledTime = date_fns.format(a, 'h:mma')
  }

  _handle_estimated_datetime() {
    if (this.state.estimatedDate === "-") {
      this.state.estimatedDate = this.state.scheduledDate
      this.state.estimatedTime = this.state.scheduledTime
    }
    else {
      let a = date_fns.parse(this.state.estimatedDate, 'ddLLL', new Date())
    }
  }

  _arrival_or_departure() {
    if (this.state.from === "Singapore") {
      return "Departure"
    } else {
      return "Arrival"
    }
  }

  _handle_status() {
    // 'Retimed', 'Cancelled', 'Landed', 'Confirmed'
    text = this.state.status
    if (this.state.status === 'Cancelled') {
      color_to_add = StyleSheet.create({placeholder: {color: "#8b0000"}}) // dark red
    } else if (this.state.status === 'Landed') {
      color_to_add = StyleSheet.create({placeholder: {color: "#048f04"}}) // dark green
    } else if (this.state.status === 'Confirmed') {
      color_to_add = StyleSheet.create({placeholder: {color: "#876D56"}}) // brown
    } else if (this.state.status === 'Retimed') {
      color_to_add = StyleSheet.create({placeholder: {color: "#c46c00"}}) // dark orange
    } else if (this.state.status === '' || this.state.status === '-') {
      color_to_add = StyleSheet.create({placeholder: {color: "grey"}}) // standard grey
      text = "No Status"
    } 
    return (
        <Text style={[styles.warning_text, color_to_add.placeholder]}>{text}</Text>
      )
  }

  _handle_luggage_belt() {
    if (this._arrival_or_departure() === "Arrival") {
      if (this.state.belt === "NO-ID" || this.state.belt === "-") {
        return (
          <View style={{alignText: 'center'}}><Text style={[styles.luggage_text, {fontFamily: "NewYorkMedium-RegularItalic"}]}>luggage belt not released yet</Text></View>
          )
      } else {
        return (
          <View><Text style={[styles.luggage_text]}>Luggage Belt {this.state.belt}</Text></View>)
      }
    } else {
      if (this.state.gate === "NO-ID" || this.state.gate === "-") {
        return (
          <View style={{alignText: 'center'}}><Text style={[styles.luggage_text, {fontFamily: "NewYorkMedium-RegularItalic"}]}>gate not released yet</Text></View>
          )
      } else {
        return (
          <View><Text style={[styles.luggage_text]}>Gate {this.state.gate}</Text></View>)
      }
    }
    
    
  }

  render() {
    return (
      <View style={styles.root}>

          <View style={styles.topRow}>
            <View style={styles.navigationArrow}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon
                  name="keyboard-arrow-left"
                  style={styles.nagivigationArrow_Icon}
                  type="MaterialIcons"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.search}>
              <View style={styles.search_Box_Rectangle}>
                <Text style={styles.search_Box_Text}>{this.state.flightNo}</Text>
              </View>
            </View>
          </View>

          <View style={styles.info}>
            <View style={styles.info_location_wrapper}>
              <View style={styles.info_wrapper}>
                <Text style={styles.info_headerText}>From:</Text>
                <Text style={styles.info_bodyText}>{this.state.from}</Text>
              </View>

              <View style={styles.info_wrapper}>
                <Text style={styles.info_headerText}>To:</Text>
                <Text style={styles.info_bodyText}>{this.state.to}</Text>
                <Text style={styles.info_subText}>(Changi - T{this.state.terminal})</Text>
              </View>
            </View>

            <View style={styles.info_time_wrapper}>
              <View style={styles.info_wrapper}>
                <Text style={styles.info_headerText}>Scheduled {this._arrival_or_departure()}</Text>
                {/*<Text style={styles.info_bodyText_time}>12:05am</Text>*/}
                <Text style={styles.info_bodyText_time}>{this.state.scheduledTime}</Text>
                {/*<Text style={styles.info_subText}>11th Dec.</Text>*/}
                <Text style={styles.info_subText}>{this.state.scheduledDate}</Text>
              </View>
              
              <View style={[styles.info_wrapper, {marginTop: hp(1)}]}>
                <Text style={styles.info_headerText}>Estimated {this._arrival_or_departure()}</Text>
                <Text style={styles.info_bodyText_time}>{this.state.estimatedTime}</Text>
                <Text style={styles.info_subText}>{this.state.estimatedDate}</Text>
              </View>
            </View>


            {this._handle_status()}

            {this._handle_luggage_belt()}
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    height: hp(100),
    width: wp(100),
  },
  topRow: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(8),
    alignItems: "center",
    marginRight: wp(9) // this is a it hacky but will do for now - need 
  },
  search: {
  },
  search_Box_Rectangle: {
    // height: hp(12),
    // width: wp(60),
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 300,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginLeft: wp(2.5)
  },
  search_Box_Text: {
    fontSize: 40,
    fontFamily: "NewYorkMedium-Regular",
    color: "#876D56",
    textAlign: 'center',
    marginTop: hp(1),
    marginBottom: hp(1),
    marginLeft: wp(10),
    marginRight: wp(10)
  },
  navigationArrow: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  nagivigationArrow_Icon: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 40,
  },
  info: {
    // alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(4),
    paddingTop: hp(3),
    paddingBottom: hp(1),
    // paddingLeft: wp(5),
    // height: hp(68.67),
    width: wp(65),
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  info_wrapper: {
    marginBottom: hp(1)
  },
  info_headerText: {
    fontSize: 18,
    fontFamily: "NewYorkMedium-RegularItalic",
    color: "#876D56",
  },
  info_bodyText: {
    fontSize: 35,
    fontFamily: "NewYorkMedium-Regular",
    color: "#876D56",
  },
  info_bodyText_time: {
    fontSize: 35,
    fontFamily: "NewYorkMedium-Bold",
    color: "#876D56",
  },
  info_subText: {
    fontSize: 18,
    fontFamily: "NewYorkMedium-Regular",
    color: "#876D56",
  },
  info_location_wrapper: {
    paddingLeft: wp(5)
  },
  info_time_wrapper: {
    marginTop: hp(3),
    paddingLeft: wp(5)
  },
  warning_text: {
    fontSize: 43,
    fontFamily: "NewYorkMedium-Bold",
    // color: "#8b0000",
    alignSelf: 'center',
    marginTop: hp(1)
  },
  luggage_text: {
    marginTop: hp(2),
    marginBottom: hp(1),
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: "NewYorkMedium-Bold",
    color: "#876D56",
  }
});
