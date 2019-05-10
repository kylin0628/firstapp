import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native'

export default class Page4 extends Component {

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>PAGE 4</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    view: {
        color: 'red',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    text: {
        color: '#4883f6',
        fontSize: 30,
        backgroundColor: '#6f3884'
    }
})
