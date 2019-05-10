import React, {Component, PropTypes} from 'react';
import {Text, View} from 'react-native';

export default class Page2 extends Component {

    render() {
        console.log("--------------render--------------")
        return (
            <View style={{width:500,flexDirection: 'row', backgroundColor: 'darkgray', margin: 20,alignItems:'flex-end'}}>
                <Text style={{color:'red',fontSize:30}}>Page2</Text>
            </View>
        )
    }
}
