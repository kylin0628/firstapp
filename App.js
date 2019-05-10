/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            remove: false,
            result: '11',
            count: -1
        }
    }

    render() {
        let text = this.state.remove ? "让她复活" : "干掉他";
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}> To get started, edit App.js</Text>
                <Text style={styles.instructions} onPress={() => {
                    this.setState({
                            remove: !this.state.remove,
                            count: count
                        }
                    )
                }}>{text}count = {this.state.count}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
