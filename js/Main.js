import React, {Component, PropTypes} from 'react';
import {Text, View, Button,StatusBar} from 'react-native';

var name = '王奇';
var age = '22';
export {name, age}
export default class Main extends Component {

    static defaultProps = {
        name: '小米'
    };

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    getCount() {
        return this.state.count;
    }


    render() {
        console.log("--------------render--------------")
        const {navigation} = this.props;
        return (
            <View style={{
                flexDirection: 'column',
                backgroundColor: '#ce3533',
                padding: 20,
            }}>
                {/*<StatusBar*/}
                {/*    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden*/}
                {/*    hidden={true}  //是否隐藏状态栏。*/}
                {/*    backgroundColor={'red'} //状态栏的背景色*/}
                {/*    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。*/}
                {/*/>*/}
                <Text>Main</Text>
                <Button
                    title={'go to page1'}
                    onPress={() => {
                        navigation.navigate('Page1', {name: '动态的带参数'})
                    }}
                />
                <Button
                    title={'go to page2'}
                    onPress={() => {
                        navigation.navigate('Page2')
                    }}
                />
                <Button
                    title={'go to Page3'}
                    onPress={() => {
                        navigation.navigate('Page3', {name: 'devio'})
                    }}
                />
                <Button
                    title={'go to Page4'}
                    onPress={() => {
                        navigation.navigate('Page4')
                    }}
                />
                <Button
                    title={'go to Page5'}
                    onPress={() => {
                        navigation.navigate('Page5')
                    }}
                />
                <Button
                    title={'go to Page6'}
                    onPress={() => {
                        navigation.navigate('Page6')
                    }}
                />
                <Button
                    title={'go to Bottom'}
                    onPress={() => {
                        navigation.navigate('Bottom')
                    }}
                />

                <Button
                    title={'go to Top'}
                    onPress={() => {
                        navigation.navigate('Top')
                    }}
                />
                <Button
                    title={'go to DrawerNav'}
                    onPress={() => {
                        navigation.navigate('DrawerNav')
                    }}
                />
                <Button
                    title={'go to EzbHomePage'}
                    onPress={() => {
                        navigation.navigate('EzbHomePage')
                    }}
                />
            </View>
        )
    }
}

export function sum(a, b) {
    var result = a + b;
    console.log("a + b = " + result);
    return result;
}
