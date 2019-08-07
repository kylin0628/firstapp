import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, GET_LIST} from "./actionTypes";
import store from "./index";

/**
 * @desc   :
 * @author : wangqi
 * @e-mail : 568603285@qq.com
 * @date   : 2019-08-02 15:51
 */

export const addItemAction = () => ({
    type: ADD_ITEM
});

export const delteItemAction = (item) => ({
    type: DELETE_ITEM,
    index: item.index
});

export const changeInputAction = (text) => ({
    type: CHANGE_INPUT,
    value: text
});

export const getListAction = (data) => ({
    type: GET_LIST,
    value: data
});

export const getList = () => {
    return (dispatch)=>{
        fetch('https://www.easy-mock.com/mock/5d47c218b5f64d04f7a07da9/firstapp/user/test')
            .then((response) => response.json())
            .then((res) => {
                console.log(res)
                const data = res.data.list;
                dispatch(getListAction(data));
            })
    }
}