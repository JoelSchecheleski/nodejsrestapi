const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    require: true
  },                                  
  description: {
    type: String,
    require: true
  }    
});

module.exports = mongoose.model("Categorys", CategorySchema);
