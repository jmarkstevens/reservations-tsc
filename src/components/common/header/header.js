// @flow

import React from 'react'
import {
  StyleSheet, Text, View,
} from 'react-native'

import Divider from '../divider'

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    marginTop: 10,
  },
  text: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
})

const Header = ({ title }: { title: string }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
    <Divider />
  </View>
)

export default Header
