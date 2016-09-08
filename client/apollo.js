import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo-passport';

import ApolloPassport from 'apollo-passport/lib/client';
import ApolloPassportLocal from 'apollo-passport-local/lib/client';

const apolloClient = new ApolloClient(meteorClientConfig());
const apolloPassport = new ApolloPassport({ apolloClient });

apolloPassport.use('local', ApolloPassportLocal);

export { apolloClient, apolloPassport };
