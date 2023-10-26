const mongoose = require("mongoose");

const JwtSchema = mongoose.Schema({
    token: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  });
  
  const Jwt = mongoose.model("Jwt", JwtSchema);
  module.exports = Jwt;
  