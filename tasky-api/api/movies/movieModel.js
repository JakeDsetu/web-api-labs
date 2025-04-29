import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String, required: true },
  description:  String ,
  release_date: Date,
  language: String,
  created_at: Date,
  updated_at: Date,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
}
});
  

export default mongoose.model('Movie', MovieSchema);
