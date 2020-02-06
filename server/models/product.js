import mongoose from "mongoose";

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String, required: true, max: 50 },
  category: { type: "ObjectId", ref: "Category" },
  price: { type: Number, required: true },
  sell: { type: Number, required: true }
});

export default mongoose.model("Product", ProductSchema);
