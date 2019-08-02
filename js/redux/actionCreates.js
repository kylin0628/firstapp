import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM} from "./actionTypes";

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