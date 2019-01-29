import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
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
