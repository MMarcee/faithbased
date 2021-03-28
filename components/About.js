import React, { Component } from 'react';
import { SafeAreaView, ScrollView, FlatList, StyleSheet, Text, 
  StatusBar, ImageBackground, Image } from 'react-native';
import { Card } from 'react-native-elements';

const DATA = [
    {
        id: 0,
        title: "Original Man",
	      verse: "Genesis 1: 27-28",
        image: "/assets/imageOfGod.jpg",
        featured: false,
        text: "So God created mankind in his own image, in the image of God he created them; male and female he created them."
    },
    {
        id: 1,
        title:"The Problem",
	      verse: "Romans 3:23",
        image: "/assets/cliffGap.jpg",
        featured: false,
        text: "For all have sinned and fall short of the glory of God."
    },
    {
        id: 2,
        title:"Solution",
	      verse: "Romans 5:8",
        image: "/assets/GodsLove.jpg",
        featured: false,
        text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."
    },
    {
        id: 3,
        title:"Acceptance",
	      verse: "John 1:12",
        image: "/assets/AcceptChrist.jpg",
        featured: true,
        text: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God."
    }
];

class About extends Component {

  static navigationOptions = {
    title: 'Gospel'
}; 

render() {

  const Item = ({ title, text, verse}) => (
      <Card 
      style={styles.item}
      backgroundColor="#bc8f8f">
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title2}>{verse}</Text>
            <Text style={styles.textS}>{text}</Text>
            

        </Card>
        );

    const renderItem = ({ item }) => (
      <Item 
        image={item.image}
        title={item.title}
        text={item.text}
        verse={item.verse}
        
      />
    );

    return (
      <ImageBackground source={require('../assets/bgChristWatermark.png')}
          style={{width: '100%', height: '100%'}}>
        
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
             />
             <Text 
                onPress={() => navigate('Home')}>Home
              </Text>
              
            </SafeAreaView>
      
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  cardDisplay: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#c0c0c0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    
  },
  title2: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#800000"
    
  },
  textS: {
    justifyContent: "center"
  }
});

export default About;