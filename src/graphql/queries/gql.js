import gql from 'graphql-tag'

export const reservationsQuery = gql`
  query reservations($arrivalDate: String!) {
    reservations(where: { arrivalDate: $arrivalDate }) {
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
