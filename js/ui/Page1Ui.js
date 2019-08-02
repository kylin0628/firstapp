import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Dimensions} from 'react-native';
const {width, hight} = Dimensions.get('window');
/**
 * @desc   :
 * @author : wangqi
 * @e-mail : 568603285@qq.com
 * @date   : 2019-08-02 16:16
 */

type Props ={
    inputValue:'',
    list:[],
    inputChangeText:(text)=>{},
    addClick:()=>{},
    deleteClick:(item)=>{},
}

export class Page1Ui extends Component<Props> {


    render() {
        return (
            <View style={styles.view}>
                <TextInput placeholder='请输入内容' value={this.props.inputValue} onChangeText={(text) => {
                    this.props.inputChangeText(text);
                }}/>

                <TouchableOpacity onPress={this.props.addClick}>
                    <Text style={{color: '#ce3533', fontSize: 20, padding: 10}}>addItem</Text>
                </TouchableOpacity>

                <FlatList data={this.props.list} renderItem={this._getRenderIntem}/>
            </View>
        )
    }

    _getRenderIntem = (item) => {
        return <TouchableOpacity onPress={()=>this.props.deleteClick(item)}>
            <Text style={{padding:20}}>{item.item}</Text>
            <View style={{width:width,height:1,backgroundColor:'#ce3533'}}/>
        </TouchableOpacity>
    };
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