import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstname: { type: String },
  lastname: { type: String },
  photo: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
