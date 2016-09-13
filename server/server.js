import ApolloPassport from 'apollo-passport';
import { createApolloServer, createApolloPassport } from 'meteor/gadicc:apollo-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import { schema, resolvers } from '/imports/api/schema';

const apolloPassport = createApolloPassport({
  jwtSecret: 'mysecret'    // will be optional/automatic in the future
});

// Pass the class, not the instance (i.e. no NEW), and no options for defaults
// Make sure you setup strategies BEFORE calling getSchema, getResolvers below.
apolloPassport.use('local', LocalStrategy /*, options */);

// Example oauth2 strategy.  Meteor Accounts sytle configuration via UI coming soon...
// You need to authorize on facebook with http://.../ap-auth/facebook/callback
apolloPassport.use('oauth2:facebook', FacebookStrategy, {
  clientID: '403859966407266',
  clientSecret: 'fd3ec904596e0b775927a1052a3f7165',
  // What permissions to request for this user
  // https://developers.facebook.com/docs/facebook-login/permissions/overview
  scope: [ 'public_profile', 'email' ],
  // Which fields to request automatically on login
  // https://developers.facebook.com/docs/graph-api/reference/v2.5/user
  profileFields: [
    'id', 'email',
    'first_name', 'middle_name', 'last_name',
    'gender', 'locale'
  ]
});

// Complete any apolloPassport.use() statements before creating apollo server
createApolloServer({
    graphiql: true,
    pretty: true,
    schema,
    resolvers,
}, {
  apolloPassport
});
