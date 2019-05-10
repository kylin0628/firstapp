import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Page1 extends Component {

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.view}>
                <Text style={[styles.text]}>Page1</Text>
                <Button style={styles.button} title={'GO BACK'} onPress={() => {
                    navigation.goBack();
                }}/>
                <Button title={'open drawer'} onPress={()=>navigation.openDrawer()}/>
                <Button title={'close drawer'} onPress={()=>navigation.closeDrawer()}/>
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
        alignItems: 'flex-end',
        justifyContent: 'space-around',
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
    text:{
        width:100,
        height:100,
        backgroundColor:'white',
        textAlignVertical:'center',
        textAlign:'center',
        color:'red'
    },
    button:{
        color:'blue'
    }
})