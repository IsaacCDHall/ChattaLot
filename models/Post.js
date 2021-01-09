const { model, Schema } = require("mongoose");

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
     ],
     // this user allows us to later populate users field with mongoose methods. Creates relational database with the orm
     user: {
         type: Schema.Types.ObjectId,
         ref: 'users'
     }
});

module.exports = model("Post", postSchema);
