const mongoose = require('mongoose');

const exercisesSchema = new mongoose.Schema({
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: String
});

module.exports = { exercisesSchema };
