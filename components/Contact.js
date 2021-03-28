import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
       
      static navigationOptions = {
          title: 'Contact Us'
      };

render() {
    return (
        <ScrollView>
            <Card title='Contact Information' wrapperStyle={{margin: 20}}>
                <Text>Placeholder</Text>
            </Card>
        </ScrollView>
        );
    }
}

export default Contact;

