import React from 'react'

import ReservationList from '../../containers/reservation-list'

export default class ReservationListScreen extends React.PureComponent<{}> {
  public static navigationOptions = (): { header: null } => ({ header: null })

  public render() {
    return <ReservationList data={{ refetch: () => null, reservations: [] }} />
  }
}
