import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Resources extends Component {

    static navigationOptions = {
        title: 'Resources'
    }

    render() {
        return (
            <ScrollView>
                <Card title='Resources' wrapperStyle={{margin: 20}}>
                    <Text>Placeholder</Text>
                </Card>
            </ScrollView>
            );
        }
    }


export default Resources;