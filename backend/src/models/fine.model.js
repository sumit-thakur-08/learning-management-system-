import mongoose from "mongoose";

const fineSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    },
    issue: {
        type: mongoose.Schema.Types.ObjectId, ref: "Issue", required: true
    },

    amount: {
        type: Number, required: true
    },

    status: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid"
    }

}, { timestamps: true });

export default mongoose.model("Fine", fineSchema);
