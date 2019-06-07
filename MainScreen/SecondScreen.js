import React from 'react';
import { StyleSheet, Text, View ,Image,SafeAreaView,Dimensions,BackHandler,ImageBackground} from 'react-native';
import { createDrawerNavigator,DrawerItems} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab from '../InnerScreens/Advertise'
import Inbox from '../InnerScreens/Inbox'
import ContactUs from '../InnerScreens/ContactUs'
import Setting from '../InnerScreens/Setting'
import { ScrollView } from 'react-native-gesture-handler';

const customDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}}>
    <ImageBackground source ={require('../assets/Background/back.jpg')} style={{width:'100%', height:'100%'}}>
    <View style={{height:180,alignItems:'center',justifyContent:'center'}}>
      <Image source={require('../assets/logo.png')} style={{ height:140,width:140,borderRadius:60}}/>
      <Text style={{fontWeight: 'bold', color:'black' ,fontSize:30}} >PartTimer</Text>
    </View>
    <ScrollView style={{backgroundColor:'white'}}>
      <DrawerItems {...props} />
      <View style={{ height:35,marginTop:5,backgroundColor:'white',flexDirection:'row'}}>
        <Icon name='power-off' style={{ fontSize:24,left:18,color:'rgba(0,0,0,0.7)' }}/>  
        <Text style={{fontWeight:'bold',fontSize:15,left:47,color:'rgba(0,0,0,0.7)' }}
      onPress ={ ()=>{ console.log('clicked');  return BackHandler.exitApp();} }>  Exit App</Text>
      </View>
    </ScrollView>
    
    </ImageBackground>
  </SafeAreaView>
)

const AppDrawerNavigator= createDrawerNavigator({
  Advertise:{
    screen:Tab,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Image source={require('../assets/saved.png')} style={{ height: 40, width: 40 }} />
      )
    }
  },
  Inbox:{
    screen:Inbox,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='envelope-open' style={{ fontSize:24,color:'tintColor' }}/>
      )
    }
  },
  Setting:{
    screen:Setting,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='cogs' style={{ fontSize:24,color:'tintColor' }}/>
      )
    }
  },
  ContactUs:{
    screen:ContactUs,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='id-badge' style={{ fontSize:24,color:'tintColor' }}/>
      )
    }
  },  
},{
  contentComponent:customDrawerComponent,
  contentOptions:{
    activeTintColor:'orange'
  },
});

export default AppDrawerNavigator;
