import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

import { ReservationResponse, ResevationListProps } from '../../../types'
import Divider from '../../common/divider'
import Header from '../../common/header'
import Footer from './footer'
import RenderItem from './render-list-item'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  flatList: { flex: 1 },
})

const ReservationList = (props: ResevationListProps) => {
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
        keyExtractor={(item: ReservationResponse) => item.id}
        renderItem={({ item }) => <RenderItem item={item} />}
        style={styles.flatList}
      />
      <Footer refetch={refetch} />
    </SafeAreaView>
  )
}

export default ReservationList
