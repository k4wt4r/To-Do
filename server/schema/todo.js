const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    content: String
});

const TodoModel = mongoose.model('todo', todoSchema);

module.exports = TodoModel;
