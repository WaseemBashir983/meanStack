var mongoose = require('mongoose');

// Validate Function to check blog title length
let titleLengthChecker = (title) => {
    // Check if blog title exists
    if (!title) {
        return false; // Return error
    } else {
        // Check the length of title
        if (title.length < 5 || title.length > 50) {
            return false; // Return error if not within proper length
        } else {
            return true; // Return as valid title
        }
    }
};

// Validate Function to check if valid title format
let alphaNumericTitleChecker = (title) => {
    // Check if title exists
    if (!title) {
        return false; // Return error
    } else {
        // Regular expression to test for a valid title
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(title); // Return regular expression test results (true or false)
    }
};

// Array of Title Validators
const titleValidators = [
    // First Title Validator
    {
        validator: titleLengthChecker,
        message: 'Title must be more than 5 characters but no more than 50'
    },
    // Second Title Validator
    {
        validator: alphaNumericTitleChecker,
        message: 'Title must be alphanumeric'
    }
];


// Validate Function to check body length
let bodyLengthChecker = (body) => {
    // Check if body exists
    if (!body) {
        return false; // Return error
    } else {
        // Check length of body
        if (body.length < 5 || body.length > 500) {
            return false; // Return error if does not meet length requirement
        } else {
            return true; // Return as valid body
        }
    }
};

// Array of Body validators
const bodyValidators = [
    // First Body validator
    {
        validator: bodyLengthChecker,
        message: 'Body must be more than 5 characters but no more than 500.'
    }
];


var BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: titleValidators
    },
    body: {
        type: String,
        required: true,
        validate: bodyValidators
    },
    createdBy: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { type: Array },
    dislikes: { type: Number, default: 0 },
    dislikedBy: { type: Array },
    comments: [{
        comment: { type: String },
        commentator: { type: String }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema)