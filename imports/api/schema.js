import { Random } from 'meteor/random';

export const schema = [`
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  username: String
  randomString: String
}

type RootQuery {
  user(id: String!): User
}

type RootMutation {
  exampleString: String
}

schema {
  query: RootQuery,
  mutation: RootMutation
}
`];

export const resolvers = {
  RootQuery: {
    async user(root, args, context) {
      // Only return the current user, for security
      if (context.userId === args.id) {
        return await Meteor.users.findOne(context.userId);
      }
    },
  },
  User: {
    emails: ({emails}) => emails,
    randomString: () => Random.id(),
  }
}
