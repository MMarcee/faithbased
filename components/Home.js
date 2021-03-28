import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Modal, Text, 
  Button, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
import { useFonts } from 'expo-font';

function ModalFont() {
  const [loaded ] = useFonts({
    bahnschrift: require('../assets/bahnschrift.ttf'), //https://docs.expo.io/versions/v40.0.0/sdk/font/
    });
  if (!loaded) {
    return null;
  }
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }
  
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
          <ImageBackground source={require('../assets/bgChristWatermark.png')}
            style={{width: '100%', height: '100%'}}>
             <ScrollView>
                <View style={styles.container}>
                <Card 
                  style={styles.cardStyle}
                  backgroundColor="#bc8f8fa">

                  <Button 
                    title="show modal" 
                    color='#bc8f8f'
                    onPress={() => {
                      this.setState({show:true})}} 
                      />
                  <Modal
                    transparent={true}
                    visible={this.state.show}
                    >
                    <View style={{backgroundColor:"#bc8f8faa", flex:0.5}}>
                      <View 
                        style={{
                          backgroundColor:"#ffffff", 
                          margin:50,padding:40,
                          borderRadius: 10,
                          flex: 1,}}
                          >
                        <Text style={[{ModalFont}, {fontSize:16}, {textAlign: 'center'}, {lineHeight: 25}]}>If you consider yourself an elite in this physical world;</Text>
                        <Text style={[{ModalFont}, {fontSize:16}, {textAlign: 'center'}, {lineHeight: 25}]}>wouldn't you want to be one in the spiritual one as well?</Text>
                        <Text style={[{ModalFont}, {fontSize:16}, {textAlign: 'center'}, {lineHeight: 25}]}>There, your condition will be ETERNAL!</Text>
                        <Button 
                          title="Learn More" 
                          fontWeight="bold"
                          color='#bc8f8f'
                          onPress={() => {
                            this.setState({show:false})}} 
                        />    
                      </View>
                    </View>
                </Modal>
                  <Text style={styles.title1}>The Rich Man and Lazarus</Text>
                  <Text style={styles.title1}>Luc 16:19-31</Text>
                  <Text style={styles.paragraph}>
                    There was a rich man who was dressed in purple and fine linen and lived in luxury every day. 
                    At his gate was laid a beggar named Lazarus, covered with sores and longing to eat what 
                    fell from the rich man’s table. Even the dogs came and licked his sores.
                    </Text>
                    <Text style={styles.paragraph}>
                    The time came when the beggar died and the angels carried him to Abraham’s side. 
                    The rich man also died and was buried. In Hades, where he was in torment, he looked 
                    up and saw Abraham far away, with Lazarus by his side. So he called to him, 
                    'Father Abraham, have pity on me and send Lazarus to dip the tip of his finger in water and cool 
                    my tongue, because I am in agony in this fire. 
                    </Text>
                    <Text style={styles.paragraph}>
                    But Abraham replied, 'Son, remember that in your lifetime you received your good things, while Lazarus 
                    received bad things, but now he is comforted here and you are in agony. And besides all this, between 
                    us and you a great chasm has been set in place, so that those who want to go from here to you cannot, 
                    nor can anyone cross over from there to us.'
                    </Text>      
                    <Text style={styles.paragraph}>
                    He answered, 'Then I beg you, father, send Lazarus to my family, for I have five brothers.
                    Let him warn them, so that they will not also come to this place of torment.'
                    Abraham replied, ‘They have Moses and the Prophets; let them listen to them.'
                    'No, father Abraham,' he said, ‘but if someone from the dead goes to them, they will repent.'
                    </Text>
                    <Text style={styles.paragraph}>                  
                    He said to him, 'If they do not listen to Moses and the Prophets, they will not be convinced 
                    even if someone rises from the dead.'
                  </Text>
                </Card>
              </View>
              <Text
                  onPress={() => navigate('Gospel')}>Salvation
              </Text>
          </ScrollView>
        </ImageBackground>
            
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
      backgroundColor: '#bc8f8f',
      opacity: 1,
      
    },  
    title1: {
      fontSize: 24,
      color: '#000',
      textAlign: "center",
    },
    textBody: {
      color: '#000',
      fontSize: 18,
      textAlign: 'left',
      lineHeight: 30,
      padding: 10,
    },
    paragraph: {
      margin: 5,
      fontSize: 14,
      textAlign: 'left',
      lineHeight: 20,
    },
    buttonStyle: {
      marginHorizontal: 20,
      marginTop: 5
    }
  });

  export default Home;
