const Todo = require('../Models/Todo')

module.exports = {
    async index(req, res){
        const { token } = req.params

        const todoList = await Todo.find({ creatorToken: token })

        return res.status(200).json({
            todoList
        })
    }, 
    async store(req, res){
        const { content, token } = req.body

        await Todo.create({
            content,
            creatorToken: token
        })

        return res.status(200)
    },

    async delete(req, res){
        
        await Todo.findByIdAndDelete(req.params.id)
        
        return res.status(200)
        
    }
}