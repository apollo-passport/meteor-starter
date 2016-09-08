import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './apollo';

import App from '/imports/ui/App';

Meteor.startup(() => {
  render(<ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>, document.getElementById('app'));
});
