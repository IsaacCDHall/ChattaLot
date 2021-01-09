// DEPENDENCY IMPORTS
const { ApolloServer } = require("apollo-server");
// graphlql tag from apollo server
const gql = require("graphql-tag");

// RELATIVE IMPORTS
const Post = require('./models/Post')
const User = require('./models/User')
//mongoose is the orm library to interface with mongoDB
const mongoose = require("mongoose");

const { MONGODB } = require("./config.js");

const typeDefs = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
  type Query {
    # sayHi: String!
    getPosts: [Post]
  }
`;
const resolvers = {
  Query: {
    // sayHi: () => "Hello, World",
    async getPosts(){
        try{
            const posts = await Post.find();
            return posts;
        } catch(err){
            throw new Error(err);
        }
    }
  },
};

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
