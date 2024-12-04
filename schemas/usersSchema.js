const mongoose = require('mongoose');
const { exercisesSchema } = require('./exercisesSchema')

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    log: [ exercisesSchema ]
});

module.exports = { usersSchema };
