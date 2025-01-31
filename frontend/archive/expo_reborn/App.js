import React from "react";
import { YellowBox, View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Font, Asset, SplashScreen, AppLoading } from "expo";
import IntroRefactor from "./src/screens/IntroRefactor";
import InfoPageRefactor from "./src/screens/InfoPageRefactor"
import PayalComp from "./src/screens/Payal"
import { createStackNavigator, createAppContainer  } from "react-navigation";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// const StackNavigation = createStackNavigator({
//     {
//       IntroRefactor: IntroRefactor
//       InfoPageRefactor: InfoPageRefactor
//     },
//     {
//       headerMode: "none",
//       initialRouteName: "IntroRefactor"
//     }
// });

const StackNavigation = createStackNavigator(
  {
    IntroRefactor: IntroRefactor,
    InfoPageRefactor: InfoPageRefactor
  },
  {
    initialRouteName: "IntroRefactor",
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
    require('./src/assets/Gradient_t9eqeMB.png')
    await Font.loadAsync({
      "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
      "OpenSans-SemiBoldItalic": require("./src/assets/fonts/OpenSans-SemiBoldItalic.ttf"),
      "OpenSans-Regular": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    });

    this.setState({ fontLoaded: true });
  }
  
  // componentWillMount() {
    
  // }

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

