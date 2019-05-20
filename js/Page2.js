import React, {Component, PropTypes} from 'react';
import {Text, View, ScrollView, StyleSheet, Image, FlatList, SectionList} from 'react-native';

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
                width: 500,
                flexDirection: 'column',
                backgroundColor: 'darkgray',
                margin: 20,
            }}>
                {/*<Text style={{color: 'red', fontSize: 30}}>Page2</Text>*/}

                <ScrollView style={styles.scrollView}>
                {/*    <Text style={styles.text}>Scroll View</Text>*/}
                {/*    <Text style={styles.text}>Scroll View</Text>*/}
                {/*    <Text style={styles.text}>Scroll View</Text>*/}
                    <Image style={{width:200,height:200}} source={{uri:'ic_launcher'}}/>
                    <Image style={{width:200,height:400, resizeMode: 'contain'}} source={require('./img/ic_cm_one.png')}/>
                    <Image style={{width:200,height:200}} source={{uri:'https://facebook.github.io/react/logo-og.png'}}/>
                    <Image
                        style={{width: 50, height: 50}}
                        source={require('./img/img_fab.png')}
                    />
                </ScrollView>

                {/*<FlatList data={array} renderItem={({item}) => <Text style={styles.text}>{item.key}</Text>}/>*/}
                <SectionList sections={[
                    {title: 'D', data: ['davin']},
                    {title: 'J', data: array1},
                ]
                } renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
                             renderSectionHeader={(section) => <Text style={styles.header}>{section.title}</Text>}/>
            </View>
        )
    }
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
