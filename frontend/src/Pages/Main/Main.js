import React, { useState, useEffect } from 'react';

import Api from '../../Services/Api'

import { 
  Container,
  Logo,
  InputTodo,
  Label,
  Input,
  TodoList,
  Hr
} from '../../Components/Form';

import { useParams } from 'react-router-dom'

import { MdSend, MdClose } from 'react-icons/md'

import logo from '../../Global/Assets/Logo.png'

export default function Main() {
  const [ content, setContent ] = useState('')
  const [ todoList, setTodoList ] = useState([])

  const { token } = useParams()

  const addNewTodo = async (e) => {
    e.preventDefault()

    const data = {
      content,
      token
    }

    setContent('')

    await Api.post('/todo', data)

  }

  const getTodoList = async () => {

    const response = await Api.get('/todo/'+ token )

    setTodoList(response.data.todoList)
  }
  
  useEffect(() => {
    getTodoList()
  },[getTodoList])

  const deleteTodo = async (id) => {
    
    await Api.delete(`/todo/${token}/${id}`)

    // return response.json({ ok: true })
  }

  return (
    <Container main>
      <Logo src={logo} main />

    <form onSubmit={addNewTodo}>
      <InputTodo>
        <Label>What do you have to do?</Label>
          <button type='submit'>
            <MdSend size={20} color='#138A72'/>
          </button>
        <Input
          value={content} 
          onChange={text => setContent(text.target.value)} 
        />
      </InputTodo>
    </form>

     {
       todoList.map(todo => (
        <TodoList key={todo._id}>
        <div>
         <Label>{todo.content}</Label>
          <button>
            <MdClose 
              size={30} 
              color='#138A72'
              onClick={() => deleteTodo(todo._id)}
            />
          </button>
        </div>
        <Hr/>
      </TodoList>
       ))
     }

    </Container>
  );
}
