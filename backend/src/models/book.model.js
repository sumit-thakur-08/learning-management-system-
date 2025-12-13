import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    rating: {
        type: Number, min: 1, max: 5
    },
    comment: {
        type: String
    }
}, { timestamps: true });


const bookSchema = new mongoose.Schema({
    bookId: {
        type: String, required: true, unique: true
    },  // Auto-generate

    title: {
        type: String, required: true
    },

    authors: [{
        type: String, required: true
    }],

    categories: [{
        type: String
    }],

    description: {
        type: String
    },

    coverImage: {
        public_id: { type: String }, // to perfrom delete and replace option
        url: { type: String }
    },

    language: {
        type: String
    },
    publisher: {
        type: String
    },
    publishedYear: {
        type: Number
    },
    pages: {
        type: Number
    },

    type: {
        type: String,
        enum: ["rent", "sell", "both"],
        default: "both"
    },

    rentPricePerDay: {
        type: Number, default: 0
    },
    sellPrice: {
        type: Number, default: 0
    },

    totalQuantity: {
        type: Number, required: true
    },
    availableQuantity: {
        type: Number, required: true
    },

    rating: {
        type: Number, default: 0
    },

    reviews: [reviewSchema]  // Embedded reviews

}, { timestamps: true });

export default mongoose.model("Book", bookSchema);
