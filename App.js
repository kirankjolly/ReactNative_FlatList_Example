import React, {Component} from 'react';
import { View } from 'react-native';
import ListView from './src/components/List/ListView';

export default class App extends Component {
  render() {
    return <View>
        <ListView />
      </View>;
  }
}
