export const defaults = {
  arrivalDate: new Date().toLocaleDateString(),
}

export const typeDefs = `
  extend type Query {
    getDate: ArrivalDate
  }
  extend type ArrivalDate {
    arrivalDate: String
  }
`
