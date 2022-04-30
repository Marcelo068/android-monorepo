import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class UserType {
  @Field()
  id: string;

  @Field()
  nome: string;

  @Field()
  email: string;

  @Field()
  senha: string;

  @Field()
  createdDate: string;

  @Field()
  updatedDate: string;
}