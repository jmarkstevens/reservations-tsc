// @flow

import React from 'react'
import {
  StyleSheet, View,
} from 'react-native'

const styles = StyleSheet.create({
  divider: {
    backgroundColor: '#777',
    alignSelf: 'stretch',
    height: 1,
    marginHorizontal: 7,
    marginVertical: 7,
  },
})

const Divider = () => (
  <View style={styles.divider} />
)

export default Divider
