import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

type Props = {};
export default class MZHomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
    }
    render () {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MZHomeScreen!</Text>
            </View>
        );
    }
}