import React, {Component, PropTypes} from 'react';
import {Text, View, Button} from 'react-native';

var name = '王奇';
var age = '22';
export {name, age}
export default class Main extends Component {

    static defaultProps = {
        name: '小米'
    }

    // static propTypes={
    //     name:PropTypes.string,
    // }


    constructor(props) {
        super(props)
        console.log("--------------constructor--------------")
        this.state = {
            count: 0
        }
    }

    getCount() {
        return this.state.count;
    }

    componentWillMount(): void {
        console.log("--------------componentWillMount--------------")
        console.log("--------------getMoviesFromApi()--------------" + this.getMoviesFromApi())
        // getMoviesFromApi();
    }


// 注意这个方法前面有async关键字
    async getMoviesFromApi() {
        try {
            fetch('https://mywebsite.com/endpoint/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'key1=value1&key2=value2',
            }).then((response) => {
                console.log("test", response.json())
                response.json()
            })
                .then((responseJson) => {
                    console.log("test", responseJson)
                    return responseJson.movies;
                })
                .catch((error) => {
                    console.error(error);
                });
            ;
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount(): void {
        console.log("--------------componentDidMount--------------")
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        console.log("--------------componentWillReceiveProps--------------")
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        console.log("--------------shouldComponentUpdate--------------")
        return true;
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        console.log("--------------componentWillUpdate--------------")
    }

    componentWillUnmount(): void {
        console.log("--------------componentWillUnmount--------------")
    }


    render() {
        console.log("--------------render--------------")
        const {navigation} = this.props;
        return (
            <View style={{
                flexDirection: 'column',
                backgroundColor: 'darkgray',
                margin: 20,
            }}>
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
