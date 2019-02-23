// @flow

import { createStackNavigator, createAppContainer } from 'react-navigation'

import ReservationList from '../screens/reservation-list'
import ReservationAdd from '../screens/reservation-add'

const Routes = {
  rReservationList: { screen: ReservationList },
  rReservationAdd: { screen: ReservationAdd },
}

const NavigatorConfiguration = {
  initialRouteName: 'rReservationList',
}

const StackNavigator = createStackNavigator(Routes, NavigatorConfiguration)

export default createAppContainer(StackNavigator)
