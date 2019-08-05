import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Dimensions} from 'react-native';

const {width, hight} = Dimensions.get('window');
/**
 * @desc   :
 * @author : wangqi
 * @e-mail : 568603285@qq.com
 * @date   : 2019-08-02 16:16
 */


export const Page1Ui = (props) => <View style={{
    color: 'blue',
    backgroundColor: 'powderblue',
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
}}>
    <TextInput placeholder='请输入内容' value={props.inputValue} onChangeText={(text) => {
        props.inputChangeText(text);
    }}/>

    <TouchableOpacity onPress={props.addClick}>
        <Text style={{color: '#ce3533', fontSize: 20, padding: 10}}>addItem</Text>
    </TouchableOpacity>

    <FlatList data={props.list} renderItem={(item) => <TouchableOpacity onPress={() => props.deleteClick(item)}>
        <Text style={{padding: 20}}>{item.item}</Text>
        <View style={{width: width, height: 1, backgroundColor: '#ce3533'}}/>
    </TouchableOpacity>}/>
</View>;