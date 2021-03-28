import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class ResourcesList extends Component {
    
    static navigationOptions = {
        title: "ResourcesList",
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Card style={styles.cardStyle}>
                        <Text>Space Holder for List of Resources:</Text>
                        <Text>Onlind Bible</Text>
                        <Text>Podcasts (Dr. Charles Stanley, Pastor Charles Tapp, 
                            Priscilla Shrirer, Joyce Meyers, Joel Osteen</Text>
                        <Text>Books</Text>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardStyle: {
      textAlign: 'left',
      lineHeight: 30,
      padding: 10
    }
});

export default ResourcesList;
