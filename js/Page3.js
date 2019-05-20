import React, {Component} from 'react';
import {Text, View, TextInput, ImageBackground} from 'react-native';

export default class Page3 extends Component {

    render() {
        return (
            <View style={{
                width: 500,
                flexDirection: 'row',
                backgroundColor: 'darkgray',
                margin: 20,
                alignItems: 'flex-end'
            }}>
                <ImageBackground source={require('./img/ic_cm_one.png')} style={{width:400,height:400}}>
                    <Text style={{color: 'red', fontSize: 30}}>Page3</Text>
                </ImageBackground>
                <TextInput/>
            </View>
        )
    }
}
