// Require schema and model from mongoose
const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        // Configure individual properties using Schema Types
        thoughtText: 
        { 
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280, 
        },
        createdAt: { type: Date, default: Date.now },
        username: { type: String, required: true },
        reactions: [Reaction],
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

// Create a virtual property `reactionCount` that retrieves the length of the thought's `reactions` array field on query
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
})

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;