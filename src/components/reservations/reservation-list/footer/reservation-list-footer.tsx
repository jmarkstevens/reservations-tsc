import React from 'react'
import { withApollo, WithApolloClient } from 'react-apollo'
import { Button, StyleSheet, View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#888',
    borderRadius: 15,
    flexDirection: 'row',
    marginBottom: 3,
    paddingHorizontal: 10,
  },
})
interface State {
  arrivalDate: string,
}

const initState = {
  arrivalDate: '',
}

interface Props { navigation: NavigationScreenProps<void>, refetch: () => void }
class Footer extends React.PureComponent<WithApolloClient<Props & NavigationScreenProps>, State> {
  public state = initState

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

  public setArrivalDate = (date: string) => {
    const { client } = this.props
    const data = { arrivalDate: date }
    client.writeData({ data })
    this.setState({ arrivalDate: date })
  }

  public render() {
    const { arrivalDate } = this.state
    return (
      <View style={styles.container}>
          <DatePicker
            cancelBtnText="Cancel"
            confirmBtnText="Confirm"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            date={arrivalDate}
            format="M/DD/YYYY"
            hideText={true}
            mode="date"
            onDateChange={this.setArrivalDate}
            style={{ width: 100 }}
          />
        <Button
          color="#fff"
          onPress={this.goToReservationAdd}
          title="New Reservation"
        />
      </View>
    )
  }
}

export default withNavigation(withApollo(Footer))
