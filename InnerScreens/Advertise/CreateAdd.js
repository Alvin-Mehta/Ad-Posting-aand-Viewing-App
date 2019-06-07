import React, { Component } from "react";
import {
    View,
    Text,ImageBackground,KeyboardAvoidingView,
    StyleSheet,Dimensions,TextInput,Button,AlertIOS
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const { width: WIDTH } = Dimensions.get('window')

import {db} from '../../MainScreen/config';



class CreateAdd extends Component {
  state={
    JobTitle:'',
    JobDesc:'',
    Timing:'',
    Payment:'',
    Number:'',
    Email:'',
    Remark:''

  };

addItem= ()=> {
    db.ref('users').push({
      JobTitle:this.state.JobTitle,
      JobDesc:this.state.JobDesc,
      Timing:this.state.Timing,
      Payment:this.state.Payment,
      Number:this.state.Number,
      Email:this.state.Email,
      Remark:this.state.Remark,
      
    });
  };



  handleSubmit= () => {
    this.addItem();
    alert('Item saved succesfully');
    this.setState({
      JobTitle:'',
      JobDesc:'',
      Timing:'',
      Payment:'',
      Number:'',
      Email:'',
      Remark:''
});
  };

  render() {
        return (
      <KeyboardAvoidingView behavior='padding'enabled>
      <ImageBackground source ={require('../../assets/Background/back2.jpg')} style={{width:'100%', height:'100%',position:'relative'}}> 
         
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'column'  }}>
          <View style={{ alignItems: 'center', justifyContent: 'center'}} >
            <Text style={{fontWeight: 'bold', color:'#2f1460' ,fontSize: 35,marginTop: 5}}>Your Add</Text>
          </View>
        
          <View>  
            <TextInput  style={styles.newinput} 
              underlineColorAndroid= 'transparent' 
              value={this.state.JobTitle}
              placeholder='Job Title' 
              maxLength={25} 
              placeholderTextColor='#4131aa' 
              name='JobTitle' 
              onChangeText={(text)=>this.setState({JobTitle:text})} />
          </View>
          <View >
            <TextInput  style={styles.jobinput} 
              underlineColorAndroid= 'transparent'
              placeholder='Job Description' 
              textAlignVertical='top' 
              placeholderTextColor='#4131aa' 
              value={this.state.JobDesc}
              name='JobDesc' 
              onChangeText={(text)=>this.setState({JobDesc:text})} />
          </View>
          <View>
            <TextInput style={styles.newinput} 
              underlineColorAndroid= 'transparent' 
              keyboardType='numeric' 
              value={this.state.Timing}
              maxLength={1} 
              placeholder='Working Hours' 
              placeholderTextColor='#4131aa' 
              name='Timing' 
              onChangeText={(text)=>this.setState({Timing:text})}/>
          </View>
          <View>
            <TextInput style={styles.newinput} 
              underlineColorAndroid= 'transparent' 
              keyboardType='numeric' 
              value={this.state.Payment}
              maxLength={8} 
              placeholder='Payment' 
              placeholderTextColor='#4131aa' 
              name='Payment' 
              onChangeText={(text)=>this.setState({Payment:text})}/>

            <Icon name={'rupee'} size={30} color={'rgba(255,255,255,4)'} style={styles.btnEye}/>
          </View>
          <View>
            <TextInput style={styles.newinput} 
              underlineColorAndroid= 'transparent' 
              keyboardType='numeric' 
              value={this.state.Number}
              maxLength={10} 
              placeholder='Contact Details' 
              placeholderTextColor='#4131aa' 
              name='Number' 
              onChangeText={(text)=>this.setState({Number:text})} />
            <Icon name={'mobile'} size={30} color={'rgba(255,255,255,4)'} style={styles.btnEye}/>
          </View>
          <View>  
            <TextInput  style={styles.newinput} 
              underlineColorAndroid= 'transparent' 
              value={this.state.Email}
              placeholder='Email' 
              maxLength={25} 
              placeholderTextColor='#4131aa' 
              name='Email' 
              keyboardType='email-address'
              onChangeText={(text)=>this.setState({Email:text})} />
          </View>
          <TextInput  style={styles.remarkinput} 
            underlineColorAndroid= 'transparent' 
            value={this.state.Remark}
            placeholder='Any Remark or Request' 
            placeholderTextColor='#4131aa' 
            name='Remark' 
            onChangeText={(text)=>this.setState({Remark:text})}/>    
          <Button title="Submit" onPress={this.handleSubmit} color='#841585' textColor='#02000f' borderRadius={15} />
        </View>
      
      </ImageBackground>
      </KeyboardAvoidingView>
        );
    }
}
export default CreateAdd;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnEye:{
        position:'absolute',
        top:17,
        right:37
      },
      jobinput:{
        width: WIDTH - 55,
        height:130,
        borderRadius:25,
        fontSize:19,
        paddingLeft:45,
        backgroundColor:'#caedf9',
        color:'#02000f',
        marginHorizontal: 25,
        marginVertical: 5
      },
      newinput:{
        width: WIDTH - 55,
        height:50,
        borderRadius:25,
        fontSize:19,
        paddingLeft:45,
        backgroundColor:'#caedf9',
        color:'#02000f',
        marginHorizontal: 25,
        marginVertical: 5
      },
      remarkinput:{
        width: WIDTH - 55,
        height:60,
        borderRadius:25,
        fontSize:19,
        paddingLeft:45,
        backgroundColor:'#caedf9',
        color:'#02000f',
        marginHorizontal: 25,
        marginVertical: 5
      },
});