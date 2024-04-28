const { Schema } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('formatCreatedAt').get(function () {
  return this.createdAt.toLocaleString();
});

thoughtSchema.virtual('reactionCount').get(function () {
  return reactions.reactionSchema.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
