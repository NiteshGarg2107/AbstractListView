/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AbstractListView from './src/AbstractClass/AbstractListView/AbstractListView';
import ListCellView from './src/AbstractClass/ListCellView/ListCellView';

export default class App extends Component {
  cell = value => {
  return <ListCellView data={value} />
};
  render() {
    return (
     <AbstractListView
    data_Source={['Abxc', 'asdas', 'sdfasdf', 'sdfasdfsd']}
    cellRow={this.cell}
    /> 
    );
  }
}
