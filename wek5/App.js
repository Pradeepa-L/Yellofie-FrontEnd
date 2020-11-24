import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login/Login";
import Signup from "./screens/signUp/Signup";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Dashboard from "./screens/dashboard/Dashboard";
import Addata from "./screens/addData/AddData"
import Home from "./screens/home/home";
import Education from "./screens/homepage/Education";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  HOME:{
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  LOGIN: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  REGISTER: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
  DASHBOARD: {
    screen: Dashboard,

  },
  EDUCATION:{
screen: Education,
navigationOptions: {
  headerShown: false,
},
  },
  ADDATA:{
    screen: Addata,
    navigationOptions: {
      headerShown: false,
    },
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({});
