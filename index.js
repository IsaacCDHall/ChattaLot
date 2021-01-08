const { ApolloServer } = require('apollo-server');
// graphlql tag from apollo server
const gql = require('graphql-tag');

const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`
const resolvers = {
    Query: {
        sayHi: () => 'Hello, World'
    }
}

const server = new ApollsoServer({
    typeDefs,
    resolvers
});

server.listen({port: 5000})
    .then( res => {
        console.log(`Server running at ${res.url}`)
    })
    .catch(err => {
        console.log('err')
    })