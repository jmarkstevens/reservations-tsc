// @flow

import React from 'react'
import { graphql } from 'react-apollo'

import { createReservation } from '../../graphql/queries'
import ReservationAddComponent from '../../components/reservations/reservation-add'

const ReservationAddContainer = props => <ReservationAddComponent {...props} />

export default graphql(createReservation)(ReservationAddContainer)
