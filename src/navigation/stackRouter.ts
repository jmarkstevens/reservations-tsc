import { createAppContainer, createStackNavigator } from 'react-navigation'

import ReservationAdd from '../screens/reservation-add'
import ReservationList from '../screens/reservation-list'

const Routes = {
  rReservationList: { screen: ReservationList },
  rReservationAdd: { screen: ReservationAdd },
}

const NavigatorConfiguration = {
  initialRouteName: 'rReservationList',
}

const StackNavigator = createStackNavigator(Routes, NavigatorConfiguration)

export default createAppContainer(StackNavigator)
