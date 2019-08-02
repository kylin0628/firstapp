import React, {Component, PropTypes} from 'react';
import {
    TextInput,
    View,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
    SectionList,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';
import store from "./redux";
import {addItemAction} from "./redux/actionCreates";

export default class Page2 extends Component {
    constructor(props) {
        super(props);
        this.setState({
            array: [
                {key: 'wangqi'},
                {key: 'davin'},
                {key: 'james'},
                {key: 'julie'},
            ]
        })
    }

    render() {
        console.log("--------------render--------------")
        return (
            <View style={{
                flexDirection: 'column',
                backgroundColor: 'red',
            }}>
                <ScrollView style={styles.scrollView}>
                    <Image style={{width: 200, height: 200}} source={{uri: 'ic_launcher'}}/>
                    <Image style={{width: 200, height: 400, resizeMode: 'contain'}}
                           source={require('./img/ic_cm_one.png')}/>
                    <Image style={{width: 200, height: 200}}
                           source={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
                    <Image
                        style={{width: 50, height: 50}}
                        source={require('./img/img_fab.png')}
                    />
                    <TextInput placeholder='请输入内容'/>
                    <TouchableOpacity onPress={this._addClick}>
                        <Text style={{color: '#ce3533', fontSize: 40, padding: 10}}>addItem</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

    _addClick = () => {
        store.dispatch(addItemAction())
    };
}
const array = [
    {key: 'wangqi'},
    {key: 'davin'},
    {key: 'james'},
    {key: 'julie'},

];
const array1 = [
    'wangqi',
    'davin',
    'james',
    'julie',

];
const styles = StyleSheet.create({
    scrollView: {
        height: 400,
        backgroundColor: 'blue',
    },
    text: {
        backgroundColor: 'red',
        color: 'blue',
        fontSize: 30,
        height: 400,
        padding: 10,
        margin: 10
    },
    header: {
        backgroundColor: 'blue',
        color: 'red',
        fontSize: 30,
        height: 400,
    }
})
