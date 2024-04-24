import { users, movies } from "../data.js";
import _ from "lodash";

export const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => _.find(users, { id: args.id }),
    movies: () => {
      return movies;
    },
    movie: (parent, args) => {
      const title = args.title;
      console.log(args);
      return _.find(movies, { title: title });
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastElemID = users[users.length - 1].id;
      user.id = lastElemID + 1;
      users.push(user);
      return user;
    },
  },
};
