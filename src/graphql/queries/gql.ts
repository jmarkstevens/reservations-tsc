import gql from 'graphql-tag'

export const GET_DATE = gql`
  query getDate {
    arrivalDate @client
  }
`

export const reservationsQuery = gql`
  query reservations($arrivalDate: String!, $arrivalDate2: String!) {
    reservations(where: { OR: [{ arrivalDate: $arrivalDate }, { arrivalDate: $arrivalDate2 }] }) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

export const createReservation = gql`
  mutation createReservation(
    $name: String!
    $hotelName: String!,
    $arrivalDate: String!,
    $departureDate: String!,
  ) {
    createReservation(
      data: {name: $name,
      hotelName: $hotelName,
      arrivalDate: $arrivalDate,
      departureDate: $departureDate}
    ) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`
