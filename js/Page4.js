import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button, FlatList, Image,ImageBackground} from 'react-native'
// import ItemDivideComponent from 'ItemDivideComponent'

export default class Page4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true,
            num: 0
        }
        // 每1000毫秒对num+1
        setInterval(() => {
            this.setState(previousState => {
                return {num: ++this.state.num};
            });
        }, 2000);
    }

    render() {
        console.log(this.state.animating)
        return (
            <View style={styles.view}>
                <Text style={styles.text} onPress={() => {
                }}>PAGE {this.state.num}</Text>
                <Button title='learn more' color='#841584' accessibilityLabel='learn more abort this purple button'
                        onPress={() => {
                            this.setState(previousState => {
                                return {animating: !this.state.animating};
                            });
                        }}/>
                <ActivityIndicator size='large' animating={this.state.animating} hidesWhenStopped={false}
                                   color='0000ff'/>
                {/*<FlatList data={map} horizontal={true}*/}
                {/*          renderItem={({item}) => <Text style={{height: 20}}>{item.key}</Text>}/>*/}

                {/*<Image source={require('/img/img_fab.png')}  style={{width:100, height:100}}/>*/}
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <ImageBackground source={require('./img/img_fab.png')} style={{width: '100%', height: '50%'}}>
                    <Text>Inside</Text>
                </ImageBackground>
            </View>
        )
    };
}
const map = [{key: 'abbbbbb'}, {key: '22222222'}, {key: 'abbbbbb'}, {key: 'baaaaaaaaa'}, {key: 'abbbbbb'}, {key: '333333333333'}, {key: 'abbbbbb'}, {key: 'baaaaaaaaa'}]
const styles = StyleSheet.create({
    view: {
        color: 'red',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    text: {
        color: '#4883f6',
        fontSize: 30,
        backgroundColor: '#6f3884'
    }
})
