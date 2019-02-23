import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'

import { defaults, resolvers, typeDefs } from './resolvers'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers,
  defaults,
  typeDefs,
})

const uri = 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
const graphqlLink = createHttpLink({ uri })

let instance = null
export default class StaticClient {
  constructor() {
    if (!instance) instance = this
    this.client = new ApolloClient({
      cache,
      link: ApolloLink.from([stateLink, graphqlLink]),
    })
    return instance
  }
}
