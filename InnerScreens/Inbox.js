import React, { Component } from "react";
import {
    View,ImageBackground,
    Text,TextInput,
    StyleSheet,SafeAreaView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from 'native-base'

class Inbox extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
              <ImageBackground source ={require('../assets/Background/back2.jpg')} style={{width:'100%', height:'100%'}}> 
              <View style={{flex:1,height:60,marginTop:40}}>
                <View style={styles.styler}>
                  <Icon name='search' style={{fontSize:24,marginTop:5}}/>
                  <TextInput
                      underlineColorAndroid='transparent'
                      placeholder='Try SEARCH'
                      placeholderTextColor='grey'
                      style={{flex:1,fontWeight:'700',backgroundColor:'white',marginLeft:7,marginTop:5}}
                  />
                </View>
              </View>
          
              <View style={{flex:9, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', color:'black' ,fontSize: 40,marginTop: 5}} >Inbox</Text>
                <Text>Search and view your messages here</Text>
              </View>
              </ImageBackground>
          </SafeAreaView>
        );
    }
}
export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    styler:{
      flexDirection:'row',
      height:50,
      padding:10,
      backgroundColor:'white',
      marginHorizontal:20,
      shadowOffset:{width:0,height:0},
      shadowColor:'black',
      shadowOpacity:0.2,
      elevation:1,
      marginTop:10

    }
});