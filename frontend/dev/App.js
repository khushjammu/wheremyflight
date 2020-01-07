import React from "react";
import { YellowBox, View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Asset, SplashScreen, AppLoading } from "expo";
import { createStackNavigator, createAppContainer  } from "react-navigation";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Font from 'expo-font'

import Intro from "./src/screens/Intro";
import InfoPage from "./src/screens/InfoPage"

const StackNavigation = createStackNavigator(
  {
    Intro: Intro,
    InfoPage: InfoPage
  },
  {
    initialRouteName: "Intro",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(StackNavigation);


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
    this.loadResources = this.loadResources.bind(this);
    this.loadResources();
  }

  async loadResources() {
    await Font.loadAsync({
      "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
      "OpenSans-SemiBoldItalic": require("./src/assets/fonts/OpenSans-SemiBoldItalic.ttf"),
      "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
      "NewYorkMedium-Regular": require("./src/assets/fonts/NewYorkMedium-Regular.otf"),
      "NewYorkMedium-RegularItalic": require("./src/assets/fonts/NewYorkMedium-RegularItalic.otf"),
      "NewYorkMedium-RegularItalic": require("./src/assets/fonts/NewYorkMedium-RegularItalic.otf"),
      "NewYorkMedium-Bold": require("./src/assets/fonts/NewYorkMedium-Bold.otf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return(
        <AppContainer />
      )
    } else { 
      return (
        <View style={{ flex: 1 }}>
      {/* 
          <ImageBackground style={styles.background} source={require("./src/assets/Gradient_t9eqeMB.png")} onLoad={this.loadResources}>
          </ImageBackground>
      */}
        </View>
      )
      
    }

  }
}

const styles = StyleSheet.create({
  background: {
    height: hp(100),
    width: wp(100),
  }
});

