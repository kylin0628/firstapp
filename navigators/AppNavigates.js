import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    DrawerItems
} from "react-navigation";
import React from 'react'
import {Button, ScrollView, SafeAreaView} from 'react-native';
import Page1 from '../js/Page1';
import Page2 from '../js/Page2';
import Page3 from '../js/Page3';
import Main from "../js/Main";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Page4 from "../js/Page4";
import Page5 from "../js/Page5";
import Page6 from "../js/Page6";
import EzbHomePage from "../js/EzbHomePage";

const AppTopNavigator = createMaterialTopTabNavigator({
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'All'
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: 'IOS'
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: 'ANDROID'
            }
        },
    }, {
        tabBarOptions: {
            tabStyle: {
                minWidth: 50,
                upperCaseLabel: false,
                scrollEnabled: true,
                style: {
                    backgroundColor: 'red'
                },
                indicatorStyle: {
                    height: 2,
                    backgroundColor: 'white'
                },
                labelStyle: {
                    fontSize: 13,
                    marginTop: 6,
                    marginBottom: 6
                }
            }
        }
    }
);
const AppBottomNavigator = createBottomTabNavigator({
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: '最热',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: '趋势',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: '收藏',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
    }, {
        tabBarOptions: {
            activeTintColor: 'red'
        }
    }
);

const AppDrawerNav = createDrawerNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            drawerLabel: 'page1',
            drawerIcon: ({tintColor}) => {
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color: tintColor}}/>
            }
        }
    },
    Page2: {
        screen: Page1,
        navigationOptions: {
            drawerLabel: 'page2',
            drawerIcon: ({tintColor}) => {
                <MaterialIcons
                    name={'move-to-inbox'}
                    size={24}
                    style={{color: tintColor}}
                />
            }
        }
    }
}, {
    initialRouteName: 'Page1',
    contentOptions: {
        activeTintColor: '#e91e63'
    },
    contentComponent: (props) => (
        <ScrollView style={{backgroundColor: 'red', flex: 1}}>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                <DrawerItems {...props}/>
            </SafeAreaView>
        </ScrollView>


    )
});
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
    },
    Page4:{
      screen:Page4,
      navigationOptions:{
          title:'page 4'
      }
    },
    Page5:{
      screen:Page5,
      navigationOptions:{
          title:'page 5'
      }
    },
    Page6:{
      screen:Page6,
      navigationOptions:{
          title:'page 6'
      }
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: {
            title: 'BottomNavigator'
        }
    },
    Top: {
        screen: AppTopNavigator,
        navigationOptions: {
            title: 'AppTopNavigator'
        }
    },
    DrawerNav:{
        screen:AppDrawerNav,
        navigationOptions:{
            title:'AppDrawerNav'
        }
    },
    EzbHomePage:{
        screen:EzbHomePage,
        navigationOptions:{
            title:'EzbHomePage'
        }
    }
});