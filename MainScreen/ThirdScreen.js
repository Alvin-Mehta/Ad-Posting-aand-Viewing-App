import React from 'react';
import { StyleSheet, Text,TextInput,Image,ImageBackground, View,Button,Dimensions,KeyboardAvoidingView } from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "api key from firebase",
  authDomain: "authorization key from firebase",
  databaseURL: "databaseUrl from firebase",
  projectId: "project id from firebase",
storageBucket: "storage bucket key from firebase",
};

import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../assets/logo.png' 
const { width: WIDTH } = Dimensions.get('window')

export default class Third extends React.Component {
  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }
//for first time signup
  signUpUser=(email,password) => {

    try{
      if(this.state.password.length < 6)
      {
        alert('Please enter atleast 6 characters')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        () => this.props.navigation.navigate('First') 
      )
    }
    catch(error){
      console.log(error.toString())
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
          <Icon name={'user'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
          <TextInput 
            iconColor='#02000f'
            style={styles.input}
            underlineColorAndroid= 'transparent'
            placeholder='Name'
            placeholderTextColor='rgba(255,255,255,0.7)'
          />
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
        <Button title="  SignIn  " 
          onPress={() => this.signUpUser(this.state.email,this.state.password)}
          color='#841585'  borderRadius={25} />
        </View>

        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center' }}  >  
          <Text style={{fontSize:18,fontWeight:'500'}}>Already have an account,just </Text>
          <Button title="Login" onPress={() => this.props.navigation.navigate('First')}
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

