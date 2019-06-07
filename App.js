import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createSwitchNavigator,createAppContainer,} from 'react-navigation';
import InformationScreen from './MainScreen/InformationScreen'
import FirstScreen from './MainScreen/FirstScreen'
import ThirdScreen from './MainScreen/ThirdScreen'
import SecondScreen from './MainScreen/SecondScreen'

const MainNavigator=createSwitchNavigator({
  Information:{ screen:InformationScreen},
  First:{ screen:FirstScreen},
  Third:{ screen:ThirdScreen},
  Second:{ screen:SecondScreen }
});
const App=createAppContainer(MainNavigator);

export default App;