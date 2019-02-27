import React from 'react'
import {
  Button, Picker, StyleSheet, Text, TextInput, View,
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import { NavigationScreenProps, withNavigation } from 'react-navigation'

import { MutationProp } from '../../../types'
import HotelList from './hotelList'

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: '#888',
    borderRadius: 15,
    marginBottom: 3,
    marginTop: 30,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  picker: {
    width: 260,
  },
  rowView: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: { fontSize: 14 },
})

const initState = {
  arrivalDate: '',
  departureDate: '',
  hotelName: '',
  name: '',
}

const { Item } = Picker

interface Props extends MutationProp {
  navigation: NavigationScreenProps<void>,
}
interface State {
  arrivalDate: string,
  departureDate: string,
  hotelName: string,
  name: string,
}

class ReservationAddComponent extends React.PureComponent<Props & NavigationScreenProps, State> {
  public state = initState

  public onSave = (): void => {
    const { mutate } = this.props
    const {
      arrivalDate, departureDate, hotelName, name,
    } = this.state
    const reservation = {
      name,
      hotelName,
      arrivalDate,
      departureDate,
    }
    mutate({
      variables: reservation,
    }).then(() => {
      const { navigation } = this.props
      const { goBack } = navigation
      goBack()
    })
  }

  public render() {
    const {
      arrivalDate, departureDate, hotelName, name,
    } = this.state
    const hotelList = HotelList.map(hotel => <Item key={hotel} label={hotel} value={hotel} />)
    return (
      <View style={styles.container}>
        <View style={styles.rowView}>
          <Text style={styles.text}>Name: </Text>
          <TextInput
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            maxLength={60}
            onChangeText={text => this.setState({ name: text })}
            placeholder="Enter Name"
            value={name}
          />
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>Hotel: </Text>
          <Picker
            style={styles.picker}
            selectedValue={hotelName}
            onValueChange={value => this.setState({ hotelName: value })}
          >
            {hotelList}
          </Picker>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}> Arrive: </Text>
          <DatePicker
            style={{ width: 200 }}
            date={arrivalDate}
            mode="date"
            placeholder="arrival date"
            format="M/D/YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
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
            onDateChange={(date) => {
              this.setState({ arrivalDate: date })
            }}
          />
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>Depart: </Text>
          <DatePicker
            style={{ width: 200 }}
            date={departureDate}
            mode="date"
            placeholder="departure date"
            format="M/D/YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
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
            onDateChange={(date) => {
              this.setState({ departureDate: date })
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button color="#fff" onPress={this.onSave} title="Save" />
        </View>
      </View>
    )
  }
}

export default withNavigation(ReservationAddComponent)
