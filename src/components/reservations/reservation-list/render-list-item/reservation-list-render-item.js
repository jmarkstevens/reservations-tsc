// @flow

import React from 'react'
import {
  StyleSheet, Text, View,
} from 'react-native'

const styles = StyleSheet.create({
  reservationView: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  textLineLeft: { flex: 5 },
  textLineRight: { flex: 3 },
})

const renderItem = ({ item }: { item: any }) => {
  const name = `Name: ${item.name}`
  const hotel = `Hotel: ${item.hotelName}`
  const arrive = `Arrive: ${item.arrivalDate}`
  const depart = `Depart: ${item.departureDate}`
  return (
    <View style={styles.reservationView}>
      <View style={styles.row}>
        <Text style={styles.textLineLeft}>{name}</Text>
        <Text style={styles.textLineRight}>{arrive}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textLineLeft}>{hotel}</Text>
        <Text style={styles.textLineRight}>{depart}</Text>
      </View>
    </View>
  )
}

export default renderItem
