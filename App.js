import React from 'react';
import EventList from './EventList';
import {
  StackNavigator,
} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <EventList />
    );
  }
}
// export default StackNavigator({
//   list:{
//     screen: EventList,
//   }
// })
