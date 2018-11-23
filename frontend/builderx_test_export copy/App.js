import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import InfoPageSuccess from "./src/screens/InfoPageSuccess";
import IntroWKeyboard from "./src/screens/IntroWKeyboard";
import Intro from "./src/screens/Intro";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  InfoPageSuccess: {
    screen: InfoPageSuccess
  },
  Intro: {
    screen: Intro
  },
  IntroWKeyboard: {
    screen: IntroWKeyboard
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    InfoPageSuccess: {
      screen: InfoPageSuccess
    },
    Intro: {
      screen: Intro
    },
    IntroWKeyboard: {
      screen: IntroWKeyboard
    }
  },
  {
    headerMode: "none",
    initialRouteName: "IntroWKeyboard"
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
  }
  async componentDidMount() {
    await Font.loadAsync({
      "OpenSans-SemiBold": require("./src/assets/fonts/OpenSans-SemiBold.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
