import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CategorySchema = new Schema({
  name: { type: String, required: true, max: 30 }
});

export default mongoose.model("Category", CategorySchema);
