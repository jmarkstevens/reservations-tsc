
interface Reservation {
  name: string,
  hotelName: string,
  arrivalDate: string,
  departureDate: string,
}

interface MutateVariables {
  variables: Reservation
}

export interface MutationProp{
  mutate: (({}: MutateVariables) => Promise<void>),
}

export interface MutationPropNull{
  mutate: (({}: MutateVariables) => Promise<void>) | null,
}

export interface ReservationResponse {
  id: string,
  name: string,
  hotelName: string,
  arrivalDate: string,
  departureDate: string,
}

export interface ResevationListProps {
  arrivalDate: string,
  data: ({ refetch: () => void, reservations: ReservationResponse[] }) | any,
}
