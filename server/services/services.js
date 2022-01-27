const TodoModel = require('../schema/todo');
module.exports = class TodoService {
    constructor() { }

    async createTodo(todoName) {
        const resp = await TodoModel.create(todoName)
        return resp
    }
    async findAll(allTodos) {
        const todo = await TodoModel.find(allTodos)
        return todo
    }
    async findById(id) {
        const todo = await TodoModel.findById(id)
        return todo
    }
    async updateTodo(id, todoName) {
        const todo = await TodoModel.findByIdAndUpdate(id, todoName)
        return todo
    }
    async deleteTodo(allTodos) {
        const todo = await TodoModel.deleteMany(allTodos)
        return todo
    }

}