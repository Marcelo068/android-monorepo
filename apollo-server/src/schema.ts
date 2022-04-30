import { buildSchema } from "type-graphql";
import UserResolver from './graphql/user'

const schema = buildSchema({
  resolvers: [UserResolver],
});

export default schema;