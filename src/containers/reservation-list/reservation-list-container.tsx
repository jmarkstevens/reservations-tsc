import React from 'react'
import { graphql } from 'react-apollo'

import ReservationList from '../../components/reservations/reservation-list'
import { reservationsQuery } from '../../graphql/queries'
import { ResevationListProps } from '../../types'

const withQuery = graphql<ResevationListProps>(reservationsQuery, {
  options: props => ({ variables: { arrivalDate: props.arrivalDate } }),
})

export default withQuery(props => (
  <ReservationList {...props} />
))
