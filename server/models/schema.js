const mongoose = require("mongoose");

//schema of application....

const bookMovieSchema = new mongoose.Schema({
  movie: { 
      type: String,
      required:true
   },
  slot: { 
      type: String,
      required:true
  },
  seats: {
    A1: { type: Number },
    A2: { type: Number },
    A3: { type: Number },
    A4: { type: Number },
    D1: { type: Number },
    D2: { type: Number },
  },
  bookedAt:  { type: Date, default: Date.now, index: true }
});

module.exports = mongoose.model("bookmovietickets", bookMovieSchema);