// @flow

import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

import Divider from '../../common/divider'
import Footer from './footer'
import Header from '../../common/header'
import RenderItem from './render-list-item'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  flatList: { flex: 1 },
})

type Reservation = {
  arrivalDate: string,
  departureDate: string,
  hotelName: string,
  id: string,
  name: string,
}
type Props = { data: { refetch: () => void, reservations: Array<Reservation> } }
const ReservationList = (props: Props) => {
  const {
    data: { refetch, reservations },
  } = props
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Reservations" />
      <FlatList
        data={reservations}
        extraData={reservations}
        ItemSeparatorComponent={Divider}
        keyExtractor={(item: Reservation) => item.id}
        renderItem={({ item }) => <RenderItem item={item} />}
        style={styles.flatList}
      />
      <Footer refetch={refetch} />
    </SafeAreaView>
  )
}

export default ReservationList
