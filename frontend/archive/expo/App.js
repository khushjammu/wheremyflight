import React from "react";
import { YellowBox, View, Image, Text } from "react-native";
import { Font, Asset, SplashScreen, AppLoading } from "expo";
import IntroRefactor from "./src/screens/IntroRefactor";
import InfoPageRefactor from "./src/screens/InfoPageRefactor"
import { StackNavigator, DrawerNavigator } from "react-navigation";
const StackNavigation = StackNavigator(
  {
    IntroRefactor: {
      screen: IntroRefactor
    },
    InfoPageRefactor: {
      screen: InfoPageRefactor
    }
  },
  {
    headerMode: "none",
    initialRouteName: "IntroRefactor"
  }
);

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
  componentDidMount() {
  // async componentDidMount() {
    // await Font.loadAsync({
    //   "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
    //   "OpenSans-SemiBoldItalic": require("./src/assets/fonts/OpenSans-SemiBoldItalic.ttf"),
    // });

    // this.setState({ fontLoaded: true });
    // SplashScreen.preventAutoHide();
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
        <StackNavigation />
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
