import { gql } from "apollo-server";

export const typeDefs = gql `
type User {
    id: ID!
    name: String!,
    username: String!,
    age: Int!,
    nationality: Nationality!,
    friends: [User],
    favouriteMovies: [Movie]
}

type Movie {
    id: ID!
    title: String!
    director: String!
    year: Int!
    actors: [String!]!
    isInTheaters: Boolean!
}

type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie (title: String!): Movie!
}

input createUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
}
type Mutation {
createUser (input: createUserInput!) :  User
}

enum Nationality {
    CANADA
    BRAZIL
    ETHIOPIA
    MOZAMBIQUE
    NEPAL
    UK
    USA

}
`