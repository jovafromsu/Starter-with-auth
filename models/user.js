import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
            lowercase: true,
        },
        password: String,
        role: {
            type: [String],
            default: ["subscriber"],
        },
        image: String,
        resetCode: {
            data: String,
            expiresAt: {
                type: Date,
                default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 minutes in milliseconds
            },
        },
    },
    { timestamps: true }
);
userSchema.plugin(uniqueValidator, { message: "is already taken." });
export default mongoose.models.User || mongoose.model("User", userSchema);
