```
node index
```
to run server opening GraphQL playground in the browser at port 5000

./config.js file containing mongo 
```
module.exports = {
  MONGODB:
    "mongodb+srv:{mongo db connection here}"
};
```

inside of graphql playground at localhost:5000

```
mutation{
  register(registerInput:{
    username:"user",
    password:"123456",
    confirmPassword:"123456",
    email: "user@email.com"
    
  }){
    id
    email
    token
    username
    createdAt
  }
}
```
```
query{
  getPosts{
    id,
    body,
    createdAt,
    username
  }
```