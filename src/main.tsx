import ReactDOM from 'react-dom/client'

import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client'

import { RouterProvider } from 'react-router-dom'

import { router } from './Routes'

import { Provider } from 'react-redux'
import { store } from './store/store'

import './assets/scss/main.scss'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
  }),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
    <Provider store={store}>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
    </Provider>

)
