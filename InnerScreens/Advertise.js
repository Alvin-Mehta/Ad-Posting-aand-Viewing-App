import React, { Component } from "react";
import {
    View,
    Text,TextInput,
    StyleSheet,SafeAreaView,Image
} from "react-native";

import Explore from '../InnerScreens/Advertise/Explore'
import CreateAdd from '../InnerScreens/Advertise/CreateAdd'
import { createBottomTabNavigator } from 'react-navigation'
import{ Header,Left,Right,Icon} from 'native-base'

class Tab extends Component{
    render(){
        return(
            <View>
  
            </View>
        );
    }
}

const TabNavigator=createBottomTabNavigator({
    Explore:{
        screen:Explore,
        navigationOptions: {
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('../assets/explore.png')} style={{ height: 40, width: 40 }} />
            )
          }
    },
    CreateAdd:{
        screen:CreateAdd,
        navigationOptions: {
            tabBarLabel: 'CreateAdd',
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('../assets/inbox.png')} style={{ height: 30, width: 30 }} />
            )
          }
    }
    },{
        tabBarOptions: {
          activeTintColor: 'red',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: 'rgba(225,230,239,0.4)',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
          }
        }
    
})
export default TabNavigator

