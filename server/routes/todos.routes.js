const express = require('express');
const { createTodo, findAll, findById, updateTodo, deleteTodo } = require('../controllers/todos.controller');
const router = express.Router()

router.post('/create', createTodo)
router.get('/All', findAll)
router.get('/:id', findById)
router.patch('/update/:id', updateTodo)
router.delete('/delete', deleteTodo)
router.get('/', function (req, res) {
    res.send('home page');
})
module.exports = router

