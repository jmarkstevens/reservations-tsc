import React from 'react'

import ReservationDate from '../../containers/reservation-date'

export default class ReservationListScreen extends React.PureComponent<{}> {
  public static navigationOptions = (): { header: null } => ({ header: null })

  public render() {
    return <ReservationDate data={null} />
  }
}
