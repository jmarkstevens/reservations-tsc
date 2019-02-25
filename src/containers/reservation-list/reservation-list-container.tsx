import React from 'react'
import { graphql } from 'react-apollo'

import ReservationList from '../../components/reservations/reservation-list'
import { reservationsQuery } from '../../graphql/queries'
import { ResevationListProps } from '../../types'

const withQuery = graphql<ResevationListProps>(reservationsQuery, {
  options: () => ({ variables: { arrivalDate: new Date().toLocaleDateString() } }),
})

export default withQuery(props => (
  <ReservationList {...props} />
))
