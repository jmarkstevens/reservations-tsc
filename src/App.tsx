import React from 'react'
import { ApolloProvider } from 'react-apollo'

import StaticClient from './graphql'
import Navigator from './navigation'

const { client } = new StaticClient()

const App = () => (
  <ApolloProvider client={client}>
    <Navigator />
  </ApolloProvider>
)

export default App
