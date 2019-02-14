import React from "react";
import { YellowBox, View, Image, Text } from "react-native";
import { Font, Asset, SplashScreen, AppLoading } from "expo";
import IntroRefactor from "./src/screens/IntroRefactor";
import InfoPageRefactor from "./src/screens/InfoPageRefactor"
import { createStackNavigator, createAppContainer  } from "react-navigation";
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
  }

  async loadResources() {
    require('./src/assets/Gradient_t9eqeMB.png')
    await Font.loadAsync({
      "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
      "OpenSans-SemiBoldItalic": require("./src/assets/fonts/OpenSans-SemiBoldItalic.ttf"),
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
          <Image source={require('./src/assets/splash.png')} onLoad={this.loadResources}/>
        </View>
      )
      
    }

  }
}

