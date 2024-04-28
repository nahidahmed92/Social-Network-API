const { Schema } = require('mongoose');

const reactionSchema = Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.Object(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

reactionSchema.virtual('formatCreatedAt').get(function () {
  return this.createdAt.toLocaleString();
});

module.exports = reactionSchema;
