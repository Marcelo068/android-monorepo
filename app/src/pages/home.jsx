import { Text, View } from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const Home = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  return (
    <View>
      {
        data.getUsers.map((user, index) => {
          return (
            <Text key={`user-${user.nome}-${index}`} >{user.nome}</Text>
          )
        })
      }
    </View>
  )
}

export default Home

const EXCHANGE_RATES = gql`
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
`;