const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  stars: {
    type: Number,
    default: 3,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  origins: {
    type: [String],
    required: true,
  },
  cookTime: {
    type: String,
    required: true,
  },
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

module.exports = foodModel = mongoose.model("food", foodSchema);