import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import {createStackNavigator, createAppContainer, StackNavigator} from 'react-navigation';
import {StyleSheet, Text, View} from 'react-native';

const RootStack = createStackNavigator({
Home: {
  screen: EventList,
  navigationOptions: () => ({
    title: 'Your Events',
  })
},
Form:{
  screen: EventForm,
  navigationOptions: () => ({
    title: 'Add an event',
  })
}
});

const App = createAppContainer(RootStack);

export default App;

