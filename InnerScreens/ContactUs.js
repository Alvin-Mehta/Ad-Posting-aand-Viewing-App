import React, { Component } from "react";
import {
    View,ImageBackground,
    Text,TextInput,Image,
    StyleSheet,SafeAreaView,Linking,
} from "react-native";
import {Header} from 'native-base'

class ContactUs extends Component {
    render() {
        return ( 
          <ImageBackground source ={require('../assets/Background/back2.jpg')} style={{width:'100%', height:'100%'}}>     
            <View style={{flex:1}}>
                <Header style={{height:70,backgroundColor:'transparent'}}>
                    <Text style={{fontWeight: 'bold', color:'black' ,fontSize:30,marginTop:30}} >Contact Us</Text>
                </Header>
                <View style={styles.middle}>
                  <View style={{flex:2}}>
                    <Text style={styles.text}>
                      For any problem related to the app,
                    </Text>
                    <Text style={styles.text2}>
                      Or if you have any suggestion related to the app.
                    </Text>
                  </View> 
                  <View style={{flexDirection:'row', flex:1}}>
                    <Text style={styles.text3}>Contact US </Text>
                    <Text style={styles.text4} selectable={true}
                     onPress={() => Linking.openURL('mailto:partTimer@gmail.com?subject=SendMail') } >partTimer@gmail.com</Text>
                  </View>
                  <View style={{flex:2}}>
                      <Image source={require('../assets/logo.png')} style={{ height: 150, width: 150 }} /></View>
                  </View>
                  <View style={{flex:1}}>

                  </View>
            </View>
          </ImageBackground>
        );
    }
}
export default ContactUs;

const styles = StyleSheet.create({
    middle: {
        flex:3,
        flexDirection:'column',
        marginTop:90,
        borderRadius: 4,
        backgroundColor:'rgba(137,196,221,0.5)',
        justifyContent:'center' ,
        alignItems:'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width:340, 
        height:400,
        left:10,
        right:5
    },
  text:{
      fontWeight: '200',
       color:'#2f1460' ,
       fontSize: 20,
       marginTop: 100,
       left:5,
       right:5
    },
  text2:{
      fontWeight: '200',
       color:'#2f1460' ,
       fontSize: 20,
       left:5,
       right:5
    },  
  text3:{
      fontWeight: '200',
       color:'#2f1460' ,
       fontSize: 18,
       marginTop:45
    },
  text4:{
      fontWeight: '400',
       color:'#9a45e0' ,
       fontSize: 22,
       marginTop:40,
       
       
    },
});