import React, {Component} from 'react';
import store from "./redux";
import {addItemAction, changeInputAction, delteItemAction, getList, getListAction} from "./redux/actionCreates";
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

    componentDidMount(): void {
        this._postTestData()
    }

    /**
     * 接口数据获取使用redux更新数据, 中间件使用redux-thunk。
     * @private
     */
    _postTestData = () => {
        store.dispatch(getList())
    }

}


