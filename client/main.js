import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { apolloClient, apolloPassport } from './apollo';
import ApolloPassportProvider from 'apollo-passport-react/lib/provider';

import App from '/imports/ui/App';

Meteor.startup(() => {
  render(<ApolloProvider client={apolloClient}>
    <ApolloPassportProvider apolloPassport={apolloPassport}>
      <App />
    </ApolloPassportProvider>
  </ApolloProvider>, document.getElementById('app'));
});
