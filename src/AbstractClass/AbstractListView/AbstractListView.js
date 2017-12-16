import React, {Component} from 'react';
import {ListView, View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default class AbstractListView extends Component {
  cell = value => {
    return <Row data={value} />;
  };
  render () {
    const ds = new ListView.DataSource ({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log (this.props.data_Source);
    return (
      <ListView
        dataSource={ds.cloneWithRows (this.props.data_Source)}
        renderRow={this.props.cellRow}
      />
    );
  }
}

//Proptypes of AbstractListView
AbstractListView.PropTypes = {
  data_Source: PropTypes.array.isRequired,
  cellRow: PropTypes.func,
};
