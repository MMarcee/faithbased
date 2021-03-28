import React, { Component } from 'react';
import Home from './Home';
import Resources from './Resources';
import ResourcesList from './ResourcesList';
import Contact from './Contact';
import About from './About';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const ResourcesNavigator = createStackNavigator(
    {
        Resources: { 
            screen: Resources,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
         },
        ResourcesList: { screen: ResourcesList }
    }, 
    {
        initialRouteName: 'Resources',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#bc8f8f'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
  );

 const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#bc8f8f'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
  );

const AboutNavigator = createStackNavigator(
  {
      About: { screen: About }
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#bc8f8f'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          },
          headerLeft: <Icon
              name='info-circle'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
  }
);

const ContactNavigator = createStackNavigator(
  {
      Contact: { screen: Contact }
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#bc8f8f'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          },
          headerLeft: <Icon
              name='address-card'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
  }
);

const CustomDrawerContentComponent = props => (
  <ScrollView>
     <SafeAreaView
         style={styles.container}
         forceInset={{top: 'always', horizontal: 'never'}}
      >
              <View style={styles.drawerHeader}>
              <View style={{flex: 1}}>
                  <Image
                      source={require('../assets/logo.png')}
                      style={styles.drawerImage}
                  />
              </View>
              <View style={{flex: 2}}>
                  <Text style={styles.drawerHeaderText}>God Matters a Lot!</Text>
              </View>
          </View>
          <DrawerItems {...props} />

     </SafeAreaView> 
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
      Home: { 
          screen: HomeNavigator,
          navigationOptions: {
              drawerIcon: ({tintColor}) => (
                  <Icon
                      name='home'
                      type='font-awesome'
                      size={24}
                      color="#bc8f8f"
                  />
              )
          }
      },
      Resources: { 
          screen: ResourcesNavigator,
          navigationOptions: {
              drawerIcon: ({tintColor}) => (
                  <Icon
                      name='list'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                  />
              )
          }
      },
      
      About: { 
          screen: AboutNavigator,
          navigationOptions: {
              drawerLabel: 'About Us',
              drawerIcon: ({tintColor}) => (
                  <Icon
                      name='info-circle'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                  />
              )
          }
      },
      Contact: { 
          screen: ContactNavigator,
          navigationOptions: {
              drawerLabel: 'Contact Us',
              drawerIcon: ({tintColor}) => (
                  <Icon
                      name='address-card'
                      type='font-awesome'
                      size={24}
                      color={tintColor}
                  />
              )
          }
      }
  },
  {
      initialRouteName: 'Home',
      drawerBackgroundColor: '#fff0f5',
      contentComponent: CustomDrawerContentComponent
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

  render() {
      return (
          <View
              style={{
                  flex: 1,
                  paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
          }}>
              <AppNavigator />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  drawerHeader: {
      backgroundColor: '#bc8f8f',
      height: 110,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
  },
  drawerHeaderText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
  },
  drawerImage: {
      margin: 10,
      height: 60,
      width: 60
  },
  stackIcon: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 24
  }
});

export default Main;