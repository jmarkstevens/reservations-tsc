import React from 'react'
import { graphql } from 'react-apollo'

import { ReservationAddComponent } from '../../components/reservations/reservation-add'
import { createReservation } from '../../graphql/queries'
import { MutationPropNull } from '../../types'

const withMutation = graphql<MutationPropNull>(createReservation)

export default withMutation(props => (
  <ReservationAddComponent {...props} />
))
