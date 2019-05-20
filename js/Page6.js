import React, {PureComponent} from 'react';
import {View, Button, Text} from 'react-native';

export default class Page6 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            words: ['hello'],
            type: 'type',
            student: new Student('wangqi')
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const words = this.state.words;
        const student = this.state.student;
        student.name = 'kylin';
        words.push(' word');
        this.setState({
            type: 'new type',
            words: words,
            student:student,
        })
    }

    render() {
        return (
            <View>
                <Text onPress={this.handleClick}>click</Text>
                <ListOfWords words={this.state.words} student={this.state.student}/>
            </View>
        )
    };
}

class ListOfWords extends PureComponent {
    render() {
        return (
            <View>
                <Text style={{color:'red'}}>{this.props.words}</Text>
                <Text>student.name = {this.props.student.name}</Text>
            </View>
        )
    }
}

class Student {
    constructor(name) {
        this.name = name;
    }
}
