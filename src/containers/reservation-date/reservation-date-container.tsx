import React from 'react'
import { graphql } from 'react-apollo'

import { GET_DATE } from '../../graphql/queries'
import ReservationList from '../reservation-list'

interface Props {
  data: any
}
const withQuery = graphql<Props>(GET_DATE)

class ReservationDate extends React.PureComponent<Props> {

  public render() {
    const { data: { arrivalDate } } = this.props
    console.log('ReservationDate props:', arrivalDate)
    return <ReservationList arrivalDate={arrivalDate} data={null} />
  }
}

export default withQuery(ReservationDate)
