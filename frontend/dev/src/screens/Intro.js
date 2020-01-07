import React, { Component } from "react";
import { Picker, SplashScreen, View, Text, StyleSheet, ImageBackground, TextInput, Alert, Image, AppState, LayoutAnimation, StatusBar } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DatePicker from "react-native-datepicker";
import Button from 'react-native-button'
import { AppLoading, LinearGradient } from 'expo';

import SearchButtonSVG from "../symbols/SearchButton";

var date_fns = require("../libraries/date_fns.min.js");


export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      text: "", 
      // date: new Date(), 
      date: "today",
      minDate: date_fns.format(date_fns.endOfYesterday(), 'YYYY-MM-DD'),
      maxDate: date_fns.format(date_fns.endOfTomorrow(), 'YYYY-MM-DD'),
      appState: AppState.currentState,
    };
    this._setDate = this._setDate.bind(this);
    this.myRef = React.createRef();  
  }

  handle_line_sizes(event) {
    var {x, y, width, height} = event.nativeEvent.layout;
    this.setState({ title_width: width, ready: true });
  }

  underline_title() {
    if (!this.state.ready) {
      return (
        <View/>
        )
    } else {
      return (
        <View style={[styles.line, {width: this.state.title_width * 0.7}]} />
        )
    }
  }

  _setDate(newDate) {
    this.setState({ date: newDate });
  }

  _onPress() {
    // date_fns.format(this.state.date,"YYYYMMDD");

    if (this.state.text != "") {
      d = Date()
      if (this.state.date === "yesterday") {d = date_fns.endfYesterday()}
      if (this.state.date === "today") {d = date_fns.endOfToday()}
      if (this.state.date === "tomorrow") {d = date_fns.endOfTomorrow()}
      // d_readable = console.log(date_fns.format(d, 'DD/MM'))
    // var url ="http://api.wheremyflight.khushjammu.com:5000/get_flights?date=" +date_fns.format(d,"YYYYMMDD") +"&flight_code=" +this.state.text;
    var url ="http://192.168.86.151:5000/get_flights?date=" +date_fns.format(d,"YYYYMMDD") +"&flight_code=" +this.state.text;
    console.log(url)
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res['status'] === 'success') {
            if (res['data']['direction'] === 'arrival') {
              this._navigateToArrivals(res, 'arrival', d);
            } else if (res['data']['direction'] === 'departure') {
              this._navigateToArrivals(res, 'departure', d);
            } else {
              Alert.alert(
                'Error!',
                "Flight entry found in both departures and arrivals. Please choose one.",
                [
                  {text: 'Arrivals', onPress: () => this._navigateToArrivals(res, 'arrival', d)},
                  {text: 'Departures', onPress: () => this._navigateToArrivals(res, 'departure', d)}
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

        Alert.alert(
            'Error!',
            "Couldn't connect to server! Please ensure device is connected to internet.",
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          );
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
  }

  _navigateToArrivals(res, flag, date){
    console.log(res);
    if (flag === 'arrival') {
      // this.props.navigation.navigate("NewInfoPage", {
      //   flight_num: this.state.text, 
      //   origin: res['data']["arrival"]["from"],
      //   destination: "Singapore",
      //   terminal: "T" + res['data']["arrival"]["terminal"],
      //   date: date_fns.format(date, 'DD/MM'),
      //   arrival_time: res['data']["arrival"]["estimatedTime"] != "-" ? res['data']["arrival"]["estimatedTime"] : res['data']["arrival"]["scheduledTime"],
      //   belt_no: res['data']["arrival"]["belt"],
      //   status: res['data']["arrival"]["status"] != "-" ? res['data']["arrival"]["status"] : "Scheduled",
      //   type: 'arrival'
      // });
      console.log("redirecting to arrival")
      this.props.navigation.navigate("NewInfoPage", res['data']['arrival']);
    } else if (flag === 'departure') {
      // this.props.navigation.navigate("NewInfoPage3", {
      //   flight_num: this.state.text, 
      //   origin: "Singapore",
      //   destination: res['data']["departure"]["to"],
      //   terminal: "T" + res['data']["departure"]["terminal"],
      //   // date: new Intl.DateTimeFormat('en-GB', {month: "2-digit", day: "2-digit"}).format(new Date(res['data']["departure"]["scheduledDatetime"])),
      //   date: date_fns.format(date, 'DD/MM'),
      //   arrival_time: res['data']["departure"]["estimatedTime"] != "-" ? res['data']["departure"]["estimatedTime"] : res['data']["departure"]["scheduledTime"],
      //   belt_no: res['data']["departure"]["gate"],
      //   status: res['data']["departure"]["status"] != "-" ? res['data']["departure"]["status"] : "Scheduled",
      //   type: 'departure'
      // });
      console.log("redirecting to departure")
      this.props.navigation.navigate("NewInfoPage", res['data']['departure'])
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      this.setState({minDate: date_fns.format(date_fns.endOfYesterday(), 'YYYY-MM-DD')});
      this.setState({maxDate: date_fns.format(date_fns.endOfTomorrow(), 'YYYY-MM-DD')});
    }
  }

  render() {
    return (
      <View style={styles.root}>
      <StatusBar hidden />
      { /* <ImageBackground style={styles.background} source={require("../assets/Gradient_t9eqeMB.png")}> */ }

          <View style={styles.search}>
            <Text onLayout={(event) => this.handle_line_sizes(event)} style={styles.search_Box_Title}>Where my flight?</Text>
            {this.underline_title()}
            <View style={styles.search_Box_Rectangle}>
              <TextInput
                style={styles.search_Box_Field}
                autoCapitalize="characters"
                autoCorrect={false}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                selectionColor="#876D56"
                autoFocus={true}
                ref={this.myRef}
              />              
            </View>

            <View style = {styles.search_Box_Button_Wrapper} >
              <Button
                // no style prop passed b/c not needed
                onPress={() => this._onPress()}
                // onPress={() => {console.log(this.state)}}
              >
                <SearchButtonSVG/> 
              </Button> 
            </View>
          
          </View>

          <View style={styles.datepicker}>
            <Picker
              selectedValue={this.state.date}
              style={{height: 50, width: 100, padding: 0, margin: 0}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({date: itemValue})
              }>
              <Picker.Item label="Yesterday" value="yesterday" />
              <Picker.Item label="Today" value="today" />
              <Picker.Item label="Tomorrow" value="tomorrow" />
            </Picker>
            {/*
            <DatePicker
              style={styles.datepicker_datepickercomponent}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate= {this.state.minDate}
              maxDate= {this.state.maxDate}
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
            */}
          </View>

        { /* </ImageBackground> */ }
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
    width: wp(100)
  },
  search: {
    alignItems: 'center',
    marginTop: hp(10), // use marginTop so that other components are affected: https://stackoverflow.com/questions/4036176/css-top-vs-margin-top
  },
  search_Box_Title: {
    // color: "rgba(255,255,255,1)",
    color: "#876D56",
    fontSize: 36,
    // fontFamily: "OpenSans-SemiBoldItalic",
    fontFamily: "NewYorkMedium-Regular",
    paddingBottom: hp(1)
  },
  line: {
    borderBottomWidth: 1, // StyleSheet.hairlineWidth,
    borderColor: "#979797",
    marginBottom: hp(5)
  },
  search_Box_Rectangle: {
    height: hp(10),
    width: wp(60),
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  search_Box_Field: {
    fontSize: 40,
    fontFamily: "OpenSans-SemiBold",
    color: "#876D56",
    width: wp(60),
    textAlign: 'center'
  },
  search_Box_Button_Wrapper: {
    marginTop: hp(3),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  datepicker: {
    alignItems: 'center',
  },
  datepicker_rectangle: {
    // height: hp(1),
    // width: wp(6),
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    marginTop: hp(5)
  },
  datepicker_text: {
    // margin: 5,
    marginTop: hp(1),
    marginBottom: hp(1),
    marginLeft: wp(1),
    marginRight: wp(1),
    fontSize: 24,
    fontFamily: "NewYorkMedium-Regular",
    color: "#876D56",
    textAlign: 'center'
  }
});

