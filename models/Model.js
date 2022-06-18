const mongoose = require("mongoose");
const newSchema = mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },

  web: String,

  android: String,

  ios: String,
});

const Model = mongoose.model("Model", newSchema);
module.exports = Model;