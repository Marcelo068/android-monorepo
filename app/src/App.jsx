import React from "react";
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

/* COMPONENTS */
import NavBar from './components/navbar/navbar'

const client = new ApolloClient({
  uri: 'http://10.0.2.2:4000/',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query ExampleQuery {
        getUsers {
          nome
          id
          email
          senha
          createdDate
          updatedDate
        }
      }
    `
  })

const App = () => {
  const [fontsLoaded] = useFonts({
    'LexendDeca-Bold': require('../assets/fonts/LexendDeca-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Text>Loading ...</Text>
    )
  } else {
    return (
      <ApolloProvider client={client}>
        <NavBar />
      </ApolloProvider>
    );
  }
}

export default App

