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
    updateUsername: (parent, args)=>{
        const id = args.input.id
        const username = args.input.newUsername
        const user = _.find(users, {id: id})
        user.username = username
        return user
    },
    deleteUser: (parent, args)=>{
        const id = args.id
        const user = _.find(users, {id: id})
        console.log(user)
        const index = users.indexOf(user)
        console.log(index)
        users.splice(index, 1)
        return user
    }
  },
};
