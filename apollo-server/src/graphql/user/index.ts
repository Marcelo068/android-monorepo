import { Query, Resolver } from "type-graphql";
import { UserType } from './types'
import axios from 'axios'

@Resolver()
export default class UserResolver {
  @Query(() => [UserType])
  async getUsers() {
    try {
      const { data } = await axios.get('http://localhost:3000/user')
      console.log('result', data.data)
      return data.data
    } catch (error) {
      console.log('err: ', error);
    }
  }
}