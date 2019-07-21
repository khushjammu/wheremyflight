import React, { Component } from "react";
import { Svg, Path } from "react-native-svg";
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var js_lib = require("../libraries/date_fns.min.js");

import Icon from "../libraries/icon.js";
import PaperPlaneSVG from "../symbols/PaperPlane";


export default class InfoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flight_num: this.props.navigation.getParam("flight_num","NO-ID"),
      origin: this.props.navigation.getParam("origin","NO-OR"),
      destination: this.props.navigation.getParam("destination","NO-DST"),
      terminal: this.props.navigation.getParam("terminal","NO-T"),
      date: this.props.navigation.getParam("date","NO-D"),
      arrival_time: this.props.navigation.getParam("arrival_time","NO-AR"),
      belt_no: this.props.navigation.getParam("belt_no","NO-BELT"),
      status: this.props.navigation.getParam("status","NO-STAT"),
      type: this.props.navigation.getParam("type","NO-TYPE")
    }
  }

  handleStatus() {
    if (this.state.status === "Landed") {
      return (
        <Text style={styles.info_wrapper_status_Positive}>{this.state.status}</Text>
      )
    } else{
      return (
        <Text style={styles.info_wrapper_status_Positive}>{this.state.status}</Text>
      ) 
    }
  }

  handleIconPlane() {
    if (this.state.type === "arrival") {
      return(
        <Icon name="flight-land" type="MaterialIcons" size={25} style={styles.info_wrapper_data_item_icon}/>
      )
    } else {
      return(
        <Icon name="flight-takeoff" type="MaterialIcons" size={25} style={styles.info_wrapper_data_item_icon}/>
      )
    }
  }

  handleIconBeltOrGate() {
    if (this.state.type === "arrival") {
      return(
        <Icon name="card-travel" type="MaterialIcons" size={25} style={styles.info_wrapper_data_item_icon}/>
      )
    } else {
      return(
        <Icon name="room" type="MaterialIcons" size={25} style={styles.info_wrapper_data_item_icon}/>
      )
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <ImageBackground style={styles.background} source={require("../assets/Gradient_t9eqeMB.png")}>

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
                <Text style={styles.search_Box_Text}>{this.state.flight_num}</Text>
              </View>
            </View>
          </View>

          <View style={styles.info}>
            <View style={styles.info_wrapper}>

              <Text style={styles.info_wrapper_locText}>{this.state.origin}</Text>

              <PaperPlaneSVG style={styles.info_wrapper_PaperPlaneSVG}/> 

              <Text style={styles.info_wrapper_locText}>{this.state.destination}</Text>

              {this.handleStatus()}

              <View style={styles.info_wrapper_data}>
                <View style={styles.info_wrapper_data_col}>
                  <View style={styles.info_wrapper_data_item}>
                    <Icon name="business" type="MaterialIcons" size={25} style={styles.info_wrapper_data_item_icon}/>
                    <Text style={styles.info_wrapper_data_item_text}>{this.state.terminal}</Text>
                  </View>
                  <View style={styles.info_wrapper_data_item}>
                    <Icon name="today" type="MaterialIcons" size={25} style={styles.info_wrapper_data_item_icon}/>
                    <Text style={styles.info_wrapper_data_item_text}>{this.state.date}</Text>
                  </View>
                </View>

                <View style = {styles.info_wrapper_data_divider}/>

                <View style={styles.info_wrapper_data_col}>
                  <View style={styles.info_wrapper_data_item}>
                    {this.handleIconPlane()}
                    <Text style={styles.info_wrapper_data_item_text}>{this.state.arrival_time}</Text>
                  </View>

                <View style={styles.info_wrapper_data_item}>
                  {this.handleIconBeltOrGate()}
                  <Text style={styles.info_wrapper_data_item_text}>{this.state.belt_no}</Text>
                </View>
                </View>
              </View>

            </View>
          </View>

        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "purple",
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
    height: hp(12),
    width: wp(60),
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  search_Box_Text: {
    fontSize: 40,
    fontFamily: "OpenSans-SemiBold",
    color: "black",
    width: wp(60),
    textAlign: 'center'
  },
  navigationArrow: {
    flexDirection: 'column',
  },
  nagivigationArrow_Icon: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 40,
  },
  info: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(4),
    height: hp(68.67),
    width: wp(80),
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    backgroundColor: "white"
  },
  info_wrapper: {
    justifyContent: "center",
    marginTop: hp(7),
    alignItems: "center"
  },
  info_wrapper_locText: {
    fontSize: 26,
    fontFamily: "OpenSans-SemiBold",
    color: "black",
  },
  info_wrapper_PaperPlaneSVG: {
    marginLeft: 10, 
    height: hp(22.5), // 186.3, 
    width: 243
  },
  info_wrapper_status_Positive:{
    marginTop: hp(3),
    color: "rgba(126,211,33,1)",
    fontSize: 17,
    fontFamily: "OpenSans-SemiBold"
  },
  info_wrapper_data: {
    flexDirection: 'row',
    marginTop: hp(3),
  },
  info_wrapper_data_col: {
    padding: hp(1),
  },
  info_wrapper_data_divider: {
    // height: 100,
    width: 1,
    backgroundColor: 'rgb(212,212,212)'
  },
  info_wrapper_data_item: {
    padding: hp(1),
    flexDirection: 'row',
    // marginRight: wp(10)
  },
  info_wrapper_data_item_text:{
    fontSize: 21, 
    // fontWeight: 'bold'
  },
  info_wrapper_data_item_icon:{
    marginRight: wp(2)
  }
});
