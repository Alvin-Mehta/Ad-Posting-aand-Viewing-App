import React, { Component } from "react";
import {
    View,Image,Button,
    Text,ImageBackground,Linking,Alert,
    StyleSheet,SafeAreaView,FlatList,ScrollView
} from "react-native";
import{ Header,Left,Right} from 'native-base'
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Category from './Explore/Category'

class Explore extends Component {
    _simpleAlertHandler=()=>{
        //function to make simple alert
        Alert.alert('* Slide Left to open Drawer', '* Click your desired advertisement and send Email,or use contact info');
      }

    constructor(){
        super()
        this.state ={
            persons:[]
        }
    }

    renderItem =({item}) => {
        const start = 'mailto:';
        let mail= item.email;
        const end = '?subject=Application for Job';
        const add = start.concat(mail,end);
        console.log(item.email);
        return(
            <View style={{fles:1, flexDirection:'column',marginBottom:5,marginLeft:5,marginRight:5, borderRadius: 4, borderWidth: 0.5, borderColor: '#6d7ba5',}}>
                <Text style={styles.text}>Job Title:  {item.JobTitle}</Text>
                <Text style={styles.text2}>Job Description:  {item.JobDesc}</Text>
                <Text style={styles.text2}>Working Hours:  {item.Timing}</Text>
                <Text style={styles.text2}selectable={true}
                onPress={() => Linking.openURL(add)}>Payment:  {item.Payment}</Text>
                <Text style={styles.text2} selectable={true}
                onPress={() => Linking.openURL(add)}>Contact Info:  {item.Number}</Text>
                <Text style={styles.text2} selectable={true}
                onPress={() => Linking.openURL(add)} >Email:  {item.Email}</Text>
                <Text style={styles.text2} selectable={true}
                onPress={() => Linking.openURL(add)}>Remark:  {item.Remark}</Text>
            </View>
        )
 
    }
    componentDidMount(){
        const url ='https://parttimer-88182.firebaseio.com/users.json';

        axios.get(url).then(res =>{
            const persons = res.data;
            console.log(Object.entries(persons));
            this.setState({persons});
        }); 

        
    }


    refreshHandler(){
        const url ='https://parttimer-88182.firebaseio.com/users.json';

        axios.get(url).then(res =>{
            const persons = res.data;
            console.log(Object.entries(persons));
            this.setState({persons});
        }); 
 

    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source ={require('../../assets/Background/back2.jpg')} style={{width:'100%', height:'100%'}}>
                <View style={styles.container}>

                    <Header style={{height:65,backgroundColor:'transparent'}}>                          
                        <Icon name='angle-double-right' style={styles.icon} onPress={() => this.props.navigation.navigate('openDrawer')} />
                        <Text style={{fontWeight: 'bold', color:'black' ,fontSize:30,marginTop:20 }} >Explore Adds</Text>
                        <Icon name='info-circle' style={styles.icon2} onPress={this._simpleAlertHandler} />
                    </Header>

                    <Text style={{ fontSize: 24, fontWeight: '700',marginTop:5, paddingHorizontal: 20 ,backgroundColor:'rgba(217,224,244,0.7)'}}>
                                Select your desired job here !
                    </Text>

                    <View style={{ height:130,backgroundColor:'rgba(217,224,244.0.7)',borderRadius: 4, borderWidth: 0.5, borderColor: '#6d7ba5'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Category 
                                imageUri={require('../../assets/experiences.jpg')}
                                name="Janta Travels"/>
                            <Category 
                                imageUri={require('../../assets/rajat.jpg')}
                                name="HistoryGuider" />
                            <Category 
                                imageUri={require('../../assets/army.jpg')}
                                name="Army Trainers"/>
                            <Category 
                                imageUri={require('../../assets/experiences.jpg')}
                                name="Job 1"/>
                            
                        </ScrollView>
                    </View>
                    <View style={{flex:1,marginTop:5}}> 
                        <FlatList
                            data={Object.entries(this.state.persons).map(item =>(item[1]))}
                            renderItem={this.renderItem}
                        />
                        <View style={{height:30}} >
                        <Button title="    REFRESH    " onPress={this.refreshHandler}
                        color='#841585' borderRadius={50} />
                        
                        </View>
                    </View>
        
                </View>
                </ImageBackground>
        </SafeAreaView>        
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgba(227,234,244,0.5)'
    },
    icon:{
        fontSize:50,
        position:'absolute',
        top:17,
        left:4
    },
    icon2:{
        fontSize:38,
        position:'absolute',
        top:25,
        right:10
    },
    text:{
        fontSize:18,
        fontWeight:'600',
        color:'black',
        left:10
    },
    text2:{
        fontSize:15,
        fontWeight:'400',
        color:'black',
        left:10
    }

});