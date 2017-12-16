import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const ListCellView = value => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {value.data}
    </Text>
  </View>
);

export default ListCellView;
