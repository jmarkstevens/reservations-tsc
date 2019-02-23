// @flow

import * as React from 'react'

import ReservationAddContainer from '../../containers/reservation-add'

export default class ReservationAddScreen extends React.PureComponent<{}> {
  static navigationOptions = {
    title: 'New Reservation',
  }

  render(): React.Node {
    return <ReservationAddContainer />
  }
}
