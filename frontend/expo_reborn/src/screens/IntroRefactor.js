import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
  Image,
  AppState,
  LayoutAnimation,
  StatusBar
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DatePicker from "react-native-datepicker";
import Button from 'react-native-button'

import {AppLoading, Font} from 'expo';

import SearchButtonSVG from "../symbols/SearchButton";

var date_fns = require("../libraries/date_fns.min.js");

export default class IntroRefactor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "", 
      date: new Date(), 
      minDate: date_fns.format(date_fns.endOfYesterday(), 'YYYY-MM-DD'),
      maxDate: date_fns.format(date_fns.endOfTomorrow(), 'YYYY-MM-DD'),
      appState: AppState.currentState,
    };
    this._setDate = this._setDate.bind(this);
    this.myRef = React.createRef();  
  }

  _setDate(newDate) {
    this.setState({ date: newDate });
  }

  _onPress() {
    date_fns.format(this.state.date,"YYYYMMDD");

    if (this.state.text != "") {
      // var url ="http://178.128.25.234:5000/get_flights?date=" +date_fns.format(this.state.date,"YYYYMMDD") +"&flight_code=" +this.state.text;

    var url ="http://192.168.86.54:5000/get_flights?date=" +date_fns.format(this.state.date,"YYYYMMDD") +"&flight_code=" +this.state.text;

      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res['status'] === 'success') {
            if (res['data']['direction'] === 'arrival') {
              this._navigateToArrivals(res, 'arrival');
            } else if (res['data']['direction'] === 'departure') {
              this._navigateToArrivals(res, 'departure');
            } else {
              Alert.alert(
                'Error!',
                "Flight entry found in both departures and arrivals. Please choose one.",
                [
                  {text: 'Arrivals', onPress: () => this._navigateToArrivals(res, 'arrival')},
                  {text: 'Departures', onPress: () => this._navigateToArrivals(res, 'departure')}
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

  _navigateToArrivals(res, flag){
    if (flag === 'arrival') {
      console.log(res['data']["arrival"]["status"] != "-" ? res['data']["arrival"]["status"] : "Scheduled");
      this.props.navigation.navigate("InfoPageRefactor", {
        flight_num: this.state.text, 
        origin: res['data']["arrival"]["from"],
        destination: "Singapore",
        terminal: "T" + res['data']["arrival"]["terminal"],
        date: date_fns.format(new Date(this.state.date), 'DD/MM'),
        arrival_time: res['data']["arrival"]["estimatedTime"] != "-" ? res['data']["arrival"]["estimatedTime"] : res['data']["arrival"]["scheduledTime"],
        belt_no: res['data']["arrival"]["belt"],
        status: res['data']["arrival"]["status"] != "-" ? res['data']["arrival"]["status"] : "Scheduled",
        type: 'arrival'
      });
    } else if (flag === 'departure') {
      console.log(res['data']["departure"]["status"] != "-" ? res['data']["departure"]["status"] : "Scheduled");
      this.props.navigation.navigate("InfoPageRefactor", {
        flight_num: this.state.text, 
        origin: "Singapore",
        destination: res['data']["departure"]["to"],
        terminal: "T" + res['data']["departure"]["terminal"],
        // date: new Intl.DateTimeFormat('en-GB', {month: "2-digit", day: "2-digit"}).format(new Date(res['data']["departure"]["scheduledDatetime"])),
        date: date_fns.format(new Date(this.state.date), 'DD/MM'),
        arrival_time: res['data']["departure"]["estimatedTime"] != "-" ? res['data']["departure"]["estimatedTime"] : res['data']["departure"]["scheduledTime"],
        belt_no: res['data']["departure"]["gate"],
        status: res['data']["departure"]["status"] != "-" ? res['data']["departure"]["status"] : "Scheduled",
        type: 'departure'
      });
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
        <ImageBackground style={styles.background} source={require("../assets/Gradient_t9eqeMB.png")}>

          <View style={styles.search}>
            <Text style={styles.search_Box_Title}>Where my flight??</Text>

            <View style={styles.search_Box_Rectangle}>
              <TextInput
                style={styles.search_Box_Field}
                autoCapitalize="characters"
                autoCorrect={false}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
                selectionColor="rgba(0, 0, 0, 1.0)"
                autoFocus={true}
                ref={this.myRef}
              />              
            </View>

            <View style = {styles.search_Box_Button_Wrapper} >
              <Button
                // no style prop passed b/c not needed
                onPress={() => this._onPress()}
              >
                <SearchButtonSVG/> 
              </Button> 
            </View>
          
          </View>

          <View style={styles.datepicker}>
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
  search: {
    alignItems: 'center',
    marginTop: hp(10), // use marginTop so that other components are affected: https://stackoverflow.com/questions/4036176/css-top-vs-margin-top
  },
  search_Box_Title: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    fontFamily: "OpenSans-SemiBoldItalic",
    paddingBottom: hp(2)
  },
  search_Box_Rectangle: {
    height: hp(12),
    width: wp(60),
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search_Box_Field: {
    fontSize: 40,
    fontFamily: "OpenSans-SemiBold",
    color: "black",
    width: wp(60),
    textAlign: 'center'
  },
  search_Box_Button_Wrapper: {
    padding: hp(3)
  },
  datepicker: {
    alignItems: 'center',
  },
  datepicker_datepickercomponent: {
    width: wp(50)
  },
  datepicker_datepickercomponent_customStyles: {
    width: wp(50)
  }
});

