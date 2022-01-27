const Todo = require("../services/services");
const TodoService = new Todo()

const createTodo = async (req, res) => {
    const newTodo = req.body;
    const resp = await TodoService.createTodo(newTodo)
    res.status(200).json(resp)
}
const findAll = async (req, res) => {
    const allTodo = req.params
    const todo = await TodoService.findAll(allTodo)
    res.status(200).json(todo)
}
const findById = async (req, res) => {
    const todoId = req.params.id
    const todo = await TodoService.findById(todoId)
    res.status(200).json(todo)
}
const updateTodo = async (req, res) => {
    const todo = await TodoService.updateTodo(req.params.id, req.body)
    res.status(200).json(todo)

}
const deleteTodo = async (req, res) => {
    const todo = await TodoService.deleteTodo(req.params)
    res.status(200).json(todo)
}
module.exports = { createTodo, findAll, findById, updateTodo, deleteTodo }