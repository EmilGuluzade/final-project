const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    src: { type: String ,default:"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" },
    googleId: { type: String }, 
    role: {
      type: String,
      enum: ["admin", "super-admin", "client"],
      default: "client",
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    banDate: { type: Date, default: null },
    banCount: {
      type: Number,
      default: 0,
    },
    wishlist: { type: Array, default: [] }, 
    basket: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
      }
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
