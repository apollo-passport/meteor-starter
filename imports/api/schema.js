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
      if (context.auth.userId === args.id) {
        return await Meteor.users.findOne(args.id);
      }
    },
  },
  User: {
    username: ({username}) => username || '(no username set)',
    emails: ({emails}) => emails.map(x => x.verified = (x.verified || 'false') && x),
    randomString: () => Random.id(),
  }
}
