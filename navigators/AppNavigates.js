import {createStackNavigator} from "react-navigation";
import React from 'react'
import {Button} from 'react-native';
import Page1 from '../js/Page1';
import Page2 from '../js/Page2';
import Page3 from '../js/Page3';
import Main from "../js/Main";

export const AppStackNavigator = createStackNavigator({
    Main: {
        screen: Main
    },
    Page1: {
        screen: Page1,
        navigationOptions: (({navigation}) => ({
            title: `${navigation.state.params.name}页面名`
        }))
    },
    Page2: {
        screen: Page2,
        navigationOptions: (({navigation}) => ({
            title: "this is page2"
        }))
    },
    Page3: {
        screen: Page3,
        navigationOptions: ((props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'this is page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() => setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                    />
                )
            }
        })
    }
})