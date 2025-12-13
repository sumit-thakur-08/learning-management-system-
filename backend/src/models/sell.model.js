import mongoose from "mongoose";

const sellSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId, ref: "Book", 
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId, ref: "User", 
        required: true
    },

    quantity: {
        type: Number, 
        required: true
    },

    price: {
        type: Number, 
        required: true
    }, // sellPrice * quantity

    paymentStatus: {
        type: String,
        enum: ["paid", "pending"],
        default: "paid"
    }

}, { timestamps: true });

export default mongoose.model("Sell", sellSchema);
