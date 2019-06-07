import React from 'react';
import { StyleSheet, Text,TextInput,Image,ImageBackground, View,Button,Dimensions,KeyboardAvoidingView } from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDMyOk7j9yguNX055j07xdbbdMda8IKI80",
  authDomain: "parttimer-88182.firebaseapp.com",
  databaseURL: "https://parttimer-88182.firebaseio.com",
  projectId: "parttimer-88182",
  storageBucket: "parttimer-88182.appspot.com",
};

import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../assets/logo.png' 
const { width: WIDTH } = Dimensions.get('window')

export default class First extends React.Component {
  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }
  //for login with signup detail
  loginUser=(email,password) => {
    try{
        firebase.auth().signInWithEmailAndPassword(email, password).then(
        // this navigates to inner pages
        () => this.props.navigation.navigate('Second')
        )
    }
    catch(error){
     //   console.log(error.toString())
     alert(error.toString())
    }
  }        
render() {
    return (
      <KeyboardAvoidingView behavior='padding'enabled> 
      <ImageBackground source ={require('../assets/Background/back.jpg')} style={{width:'100%', height:'100%'}}>
      <View style={{flex: 1,flexDirection:'column', justifyContent:'space-around', alignItems: 'center', marginTop:100 }}>
      
        <View style={{ flex: 2.5, justifyContent:'center'}}  >
          <Image source={logo} style={styles.logo} />
          <Text style={{fontWeight: 'bold', color:'black' ,fontSize: 40,marginTop: 5,opacity: 0.5  }} > PART-TIMER </Text>   
        </View>      
      
        <View style={{ flexDirection: 'row'}}  >
          <Icon name={'at'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
          <TextInput 
            iconColor='#02000f'
            style={styles.input}
            underlineColorAndroid= 'transparent'
            placeholder='Email'
            placeholderTextColor='rgba(255,255,255,0.7)'
            onChangeText={(email) => this.setState({email})}
            keyboardType='email-address'
          />
        </View>

        <View style={{  flexDirection: 'row' }}  >
          <Icon name={'lock'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/> 
          <TextInput style={styles.input}
                    underlineColorAndroid= 'transparent'
                    placeholder='Password'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    autoCorrect={false}
                    secureTextEntry={true} 
                    onChangeText={(password) => this.setState({password})}
          />
        </View>

        <View style={{ flex: 1 }} >
        <Button title="  Login  " 
        onPress={() => this.props.navigation.navigate('Second')}
        //  onPress={() => this.loginUser(this.state.email,this.state.password)}
          color='#841585'  borderRadius={25} />
        </View>

        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}  >  
          <Text style={{fontSize:18,fontWeight:'500'}}>First time user,just </Text>
          <Button title="SignUp" onPress={() => this.props.navigation.navigate('Third')}
             color='#841585' textColor='#02000f' borderRadius={25} />
        </View> 

        </View>   
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:200,
    height:200,
    left:23

  },
  input:{
    width: WIDTH - 55,
    height:50,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    marginVertical: 5
  },
  inputIcon:{
    position:'absolute',
    top:17,
    left:38
  }
});

