// @flow

import React from 'react'
import { graphql } from 'react-apollo'

import { reservationsQuery } from '../../graphql/queries'
import ReservationList from '../../components/reservations/reservation-list'

const ReservationListContainer = props => <ReservationList {...props} />

export default graphql(reservationsQuery, {
  options: () => ({ variables: { arrivalDate: new Date().toLocaleDateString() } }),
})(ReservationListContainer)
