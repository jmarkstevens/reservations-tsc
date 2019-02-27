import React from 'react'
import { graphql } from 'react-apollo'

import { GET_DATE } from '../../graphql/queries'
import ReservationList from '../reservation-list'

const getFull2Digits = (value: string) => {
  const fillValue = value.length === 1 ? '0' : ''
  return `${fillValue}${value}/`
}

const getArrivalDate2 = (arrivalDate: string) => {
  const dateArray = arrivalDate.split('/')
  const mm = getFull2Digits(dateArray[0])
  const dd = getFull2Digits(dateArray[1])
  return `${mm}${dd}${dateArray[2]}`
}

interface Props {
  data: any
}
const withQuery = graphql<Props>(GET_DATE)

class ReservationDate extends React.PureComponent<Props> {

  public render() {
    const { data: { arrivalDate } } = this.props
    const arrivalDate2 = getArrivalDate2(arrivalDate)
    return (
      <ReservationList
        arrivalDate={arrivalDate}
        arrivalDate2={arrivalDate2}
        data={null}
      />
    )
  }
}

export default withQuery(ReservationDate)
