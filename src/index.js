import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Context from './Context'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petiesgram-server.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = createRoot(container)
// root.render('Hola Luis');
// root.render(<App />)
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('app')
// )
