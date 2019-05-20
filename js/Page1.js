import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput,Platform} from 'react-native';

export default class Page1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.view}>
                <Text style={[styles.text]}>Page1<Text style={{color:'blue',fontSize:25}}> {Platform.OS==='ios'?'wangqi':'kylin'}</Text></Text>
                <Button style={styles.button} title={'GO BACK'} onPress={() => {
                    navigation.goBack();
                }}/>
                <Button title={'open drawer'} onPress={() => navigation.openDrawer()}/>
                <Button title={'close drawer'} onPress={() => navigation.closeDrawer()}/>

                <View style={styles.view1}>
                    <Text style={styles.text1}>text 1</Text>
                    <Text style={styles.text2}>text 2</Text>
                    <Text style={styles.text3}>text 3</Text>
                </View>
                <View>
                    <TextInput placeholder='请输入内容' onChangeText={(text) => {
                        this.setState({
                            text
                        })
                        console.log(`text = ` + text)
                    }}/>

                    <Text style={styles.text1}>{this.state.text}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    view: {
        color: 'blue',
        backgroundColor: 'powderblue',
        fontWeight: 'bold',
        fontSize: 50,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },
    view1: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#ff0022',
    },
    red: {
        flex: 1,
        flexDirection: 'row',
        color: 'red'
    },
    green: {
        color: 'green',
        flex: 1
    },
    text: {
        backgroundColor: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'red'
    },
    text1: {
        color: 'blue',
        fontSize: 15,
        backgroundColor: 'black',
        height: 100,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
        marginTop: 10,
        marginStart: 10,
    },
    text2: {
        color: 'blue',
        fontSize: 20,
        backgroundColor: 'black',
        height: 150,
        marginTop: 10,
        marginBottom: 10,
        marginEnd: 10,
    },
    text3: {
        color: 'blue',
        fontSize: 15,
        backgroundColor: 'black',
        height: 200,
        marginTop: 10,
        marginEnd: 10,
    },
    button: {
        color: 'blue'
    }
})