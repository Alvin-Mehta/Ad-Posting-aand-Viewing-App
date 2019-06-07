import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,Linking
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 120, width: 130, marginLeft: 10, 
            borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',marginTop:3 }}
                    />
                </View>
                <View style={{  paddingLeft: 10, paddingTop: 10}}>
                    <Text selectable={true} onPress={() => Linking.openURL('https://www.historyguider.com/')} >{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});  