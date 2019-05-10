import React, {Component} from 'react';
import {Text, View,TextInput} from 'react-native';

export default class Page3 extends Component {

    render() {
        return (
            <View style={{width:500,flexDirection: 'row', backgroundColor: 'darkgray', margin: 20,alignItems:'flex-end'}}>
               <Text style={{color:'red',fontSize:30}}>Page3</Text>
               <TextInput />
            </View>
        )
    }
}
