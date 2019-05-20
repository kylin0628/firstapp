import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button, FlatList, Image, ImageBackground} from 'react-native'

export default class Page5 extends Component {

    render() {
        return (
            <View style={styles.view}>
                <View style={styles.view1}>
                        <Text style={styles.text}>top left</Text>
                        <Text style={styles.text1}>top right</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.text}>bottom left</Text>
                    <Text style={styles.text1}>bottom right</Text>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'red',
        flex: 1,
    },
    view1: {
        position:'relative',
        backgroundColor: 'grey',
    },
    view2: {
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'flex-end',
        flex: 1,
    },
    view11: {
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'flex-end',
        flex: 1,
    },
    view12: {
        backgroundColor: 'blue',
        flexDirection: 'column',
        alignItems: 'flex-end',
        flex: 1,
    },
    view21: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        flex: 1,
    },
    view22: {
        backgroundColor: 'blue',
        alignItems: 'flex-end',
        flex: 1,
    },

    text: {
        color: 'blue',
        fontSize: 30,
        backgroundColor: 'green',
        alignSelf:'flex-start'
    },
    text1: {
        color: 'black',
        fontSize: 30,
        backgroundColor: 'white',
        alignSelf:'flex-start'
    },
})

