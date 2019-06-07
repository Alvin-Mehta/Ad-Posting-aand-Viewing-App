import React, { Component } from "react";
import {
    View,ImageBackground,
    Text,BackHandler,
    StyleSheet,SafeAreaView
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from 'native-base'

class Setting extends Component {
    render() {
        return (   
            <SafeAreaView> 
            <ImageBackground source ={require('../assets/Background/back2.jpg')} style={{width:'100%', height:'100%'}}>        
            <View style={{flex:1}}>
                <Header style={{height:80,backgroundColor:'transparent'}}>
                    <Text style={{fontWeight: 'bold', color:'black' ,fontSize:30,marginTop:40 }} >Settings</Text>
                </Header>

                <View style={{flex:9 ,borderRadius: 4,alignSelf:'auto', borderWidth: 0.5, borderColor: '#d6d7da',}}>
                    <View style={{ height:40,width:160,marginTop:190,borderRadius:15,alignSelf:'center',backgroundColor:'white',flexDirection:'row'}}>
                        <Icon name='power-off' style={{ fontSize:30,top:5,left:5,color:'rgba(0,0,0,0.7)' }}/>  
                        <Text style={{fontWeight:'bold',fontSize:30,left:15,color:'rgba(0,0,0,0.7)' }}
                        onPress ={ ()=>{ console.log('clicked');  return BackHandler.exitApp();} }>LogOut</Text>
                    </View>
                </View>
            
            </View>
            </ImageBackground>
            </SafeAreaView>
        );
    }
}
export default Setting;

const styles = StyleSheet.create({

});