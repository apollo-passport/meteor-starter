# meteor apollo-passport starter kit V0.1.6

This is the [Apollo Passport](https://github.com/apollo-passport/meteor-apollo-passport) version of the Apollo [meteor-starter-kit](https://github.com/apollostack/meteor-starter-kit): a simple kit to start experimenting with Apollo, Apollo Passport, Meteor and React.

## Info

Note, this will likely get a lot easier after Meteor 1.5, which will feature an official Apollo integration.

### Diffs

* [track-upstream -> master](https://github.com/apollo-passport/meteor-starter/compare/track-upstream...apollo-passport:master) - changes from original to add apollo-passport support.
* [(upstream):master -> (us):track-upstream](https://github.com/apollostack/meteor-starter-kit/compare/master...apollo-passport:track-upstream) - are we up to date?

### Includes:
- Apollo server
- Apollo client
- Express
- React
- Apollo Passport
- ES6 syntax
* check `package.json` for specific versions


### Running it

```
meteor npm install
meteor
```

### Folder structure
    .
    ├── client                  # Client files
    │   ├── main.css            # Styles
    │   ├── main.html           # First loaded view pulling from imports
    │   └── main.js             # Imports all required files - React render
    ├── imports                 # A client/server folder
    │   ├── api                 #
    │   |  └── schema.js        # Schema & query definitions
    │   └── ui                  #
    │      └── App.js           # UI React rendering
    ├── server                  # Server files
    │   └── server.js           # Main server file initiating Apollo server
    └── package.json            # node dependencies


### Learn more

- [`apollo` package docs](https://github.com/apollostack/meteor-integration/)
- [Apollo Stack docs](http://docs.apollostack.com/)
