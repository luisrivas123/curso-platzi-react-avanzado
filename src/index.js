import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import Context from './Context'

import { App } from './App'

// const client = new ApolloClient({
//   uri: 'https://petiesgram-server.vercel.app/graphql',
//   cache: new InMemoryCache()
// })

const httpLink = createHttpLink({
  uri: "https://petiesgram-server.vercel.app/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token")
  return {
      headers: {
          ...headers,
      authorization: token ? `Bearer ${token}` : "",
      },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(
    ({ networkError }) => {
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    } 
  )
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
