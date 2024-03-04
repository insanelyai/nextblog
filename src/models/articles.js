import mongoose, { Schema } from "mongoose";
import { connect } from "@/utils/mongoConnect";

connect();

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Required: Title"],
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Required: Content"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "Required: Author"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Article =
  mongoose.models.articles || mongoose.models("articles", ArticleSchema);

export default Article;
