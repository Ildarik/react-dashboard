import mongoose from "mongoose";

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: { type: String, required: true, max: 50 },
  hash: { type: String, required: true, max: 50 }
});

export default mongoose.model("User", UserSchema);
