// DEPENDENCY IMPORTS
const { ApolloServer } = require("apollo-server");

// RELATIVE IMPORTS
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
//mongoose is the orm library to interface with mongoDB
const mongoose = require("mongoose");

const { MONGODB } = require("./config.js");


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });
