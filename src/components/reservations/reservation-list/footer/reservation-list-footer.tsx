import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#888',
    borderRadius: 15,
    marginBottom: 3,
    paddingHorizontal: 10,
  },
})

interface Props { navigation: NavigationScreenProps<void>, refetch: () => void }
class Footer extends React.PureComponent<Props & NavigationScreenProps> {
  public didFocusSubscription: any

  public focusReturned = (): void => {
    const { refetch } = this.props
    refetch()

    this.didFocusSubscription.remove()
  }

  public goToReservationAdd = (): void => {
    const { navigation } = this.props
    const { addListener, navigate } = navigation
    this.didFocusSubscription = addListener(
      'didFocus',
      (): void => {
        this.focusReturned()
      },
    )

    navigate('rReservationAdd')
  }

  public render() {
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
