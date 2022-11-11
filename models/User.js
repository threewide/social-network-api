// Require schema and model from mongoose
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        // Configure individual properties using Schema Types
        username: { type: String, required: true },
        email: { type: String, required: true },
        thoughts: [
            { 
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            { 
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        // Use built in date method to get current date
        lastAccessed: { type: Date, default: Date.now },
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `friendCount` that retrieves the length of the user's `friends` array field on query
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.friends.length}`;
})

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
