import * as React from 'react'

import ReservationAddContainer from '../../containers/reservation-add'

export default class ReservationAddScreen extends React.PureComponent<{}> {
  public static navigationOptions = {
    title: 'New Reservation',
  }

  public render() {
    return <ReservationAddContainer mutate={null} />
  }
}
