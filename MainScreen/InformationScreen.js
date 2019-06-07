import React, { Component } from "react";
import {
    View,
    Text,TextInput,
    StyleSheet,ImageBackground,Button
} from "react-native";


class Setting extends Component {
    render() {
        return (        
            <ImageBackground source ={require('../assets/Background/back.jpg')} style={{width:'100%', height:'100%'}}>
            <View style={{flex:1 }}>
                <View style={{flex:3, justifyContent: 'center', alignItems:'center' }}>
                <Text style={{fontWeight: 'bold', color:'black' ,fontSize:50,marginTop:90}} >
                    Welcome</Text>
                </View>
                <View style={styles.middle}>
                    <Text style={{left:10, fontWeight: '500',fontSize:30,marginTop:30,marginBottom:40 }}>Note :</Text>
                    <View style={{flexDirection:'row', left:5}} >
                        <Text style={{fontSize:35}}>* </Text>
                        <Text style={styles.Text}>
                        Enter your Email and Password to Login.
                        </Text>
                    </View>
                    <View style={{flexDirection:'row', left:5}} >
                        <Text style={{fontSize:35}}>* </Text>
                        <Text style={styles.Text}>
                        For first time use,kindly enter your Email, Password and press
                         <Text style={{color:'#aa142d'}}>SignUp</Text>
                        </Text>    
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.Text2} >Now simply</Text>
                        <Text style={{fontWeight: '400', color:'#aa142d' ,fontSize:20,left:15,marginTop:20}} > Login</Text>
                        <Text style={{fontWeight: '400', color:'#841585' ,fontSize:20,left:15,marginTop:20}} > and use the app.</Text>
                    </View>
                </View>
                <View style={{ flex: 2, justifyContent:'flex-start' ,alignItems:'center',marginTop:10 }} >
                    <Button title="    NEXT    " onPress={() => this.props.navigation.navigate('First')}
                    color='#841585' borderRadius={50} />
                </View>
            </View>
            </ImageBackground>    
        );
    }
}
export default Setting;

const styles = StyleSheet.create({
middle: {
    flex:4,flexDirection:'column',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width:350, 
    height:500,
    left:5,
    right:5
},
Text:{
    fontWeight: '400', 
    color:'#841585' ,
    fontSize:20,
    left:5,    
},
Text2:{
    fontWeight: '400', 
    color:'#841585' ,
    fontSize:20,
    left:15,
    marginTop:20
},
});