import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import store from "./redux";
import {addItemAction, changeInputAction, delteItemAction} from "./redux/actionCreates";
import {Page1Ui} from './ui/Page1Ui'


export default class Page1 extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <Page1Ui
                addClick={this._addClick}
                deleteClick={this._deleteClick}
                inputChangeText={this._inputChangeText}
                inputValue={this.state.inputValue}
                list={this.state.list}
            />

        )
    }

    _addClick = () => {
        store.dispatch(addItemAction())
    };

    _deleteClick = (item) => {
        store.dispatch(delteItemAction(item))
    };


    _inputChangeText = (text) => {
        store.dispatch(changeInputAction(text))
    };


    storeChange = () => {
        this.setState(store.getState())
    }

}


