// @flow

import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#888',
    borderRadius: 15,
    marginBottom: 3,
    paddingHorizontal: 10,
  },
})

type Props = { navigation: NavigationScreenProp<void>, refetch: () => void }
class Footer extends React.PureComponent<Props> {
  static didFocusSubscription: *

  focusReturned = (): void => {
    const { refetch } = this.props
    refetch()

    // $FlowFixMe doesn't like static
    this.didFocusSubscription.remove()
  }

  goToReservationAdd = (): void => {
    const { navigation } = this.props
    const { addListener, navigate } = navigation
    // $FlowFixMe doesn't like static
    this.didFocusSubscription = addListener(
      'didFocus',
      (): void => {
        this.focusReturned()
      },
    )

    navigate('rReservationAdd')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          color="#fff"
          onPress={this.goToReservationAdd}
          title="New Reservation"
        />
      </View>
    )
  }
}

export default withNavigation(Footer)
