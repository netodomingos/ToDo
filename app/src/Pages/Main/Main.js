import React, { useState, useEffect } from 'react';

import { useFonts } from '@use-expo/font'

import { MaterialIcons } from '@expo/vector-icons'

import Api from '../../Services/Api'

import { AppLoading } from 'expo'

import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  Logo,
  FormTodo,
  Label,
  Input,
  SendView,
  SendButton,
  Todo,
  TodoView,
  DeleteButton,
  HR
} from '../../Components/Components';

import logo from '../../Global/Logo.png'

export default function Main({ route }) {
  const [ content, setContent ] = useState('')
  const [ todo, setTodo ] = useState([])

  const { token } = route.params

  const getAllTodo = async () => {
    try{

      const response = await Api.get('/todo/' + token)

      setTodo(response.data.todoList)

    }catch(err){
      alert(err)
    }
  }

  useEffect(() => {
    getAllTodo()
  }, [handleAddTodo])

  const deleteTodo = async (id) => {
    await Api.delete(`/todo/${token}/${id}`)
  }

  const handleAddTodo = async () =>  {

    try{
        const data = {
          content,
          token
        }

        await Api.post('/todo', data)

      }catch(err){
        alert(err)
    }
  }
  

  let [ fontsLoaded ] = useFonts({
    'MontserratAlternates-Bold': require('../../../assets/Fonts/MontserratAlternates-Bold.ttf'),
    'MontserratAlternates-Regular': require('../../../assets/Fonts/MontserratAlternates-Regular.ttf')
  })


  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
      <Container>
        <Logo source={logo} />
      
      <FormTodo>
        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>What do you have to do?</Label>
        <SendView>
          <SendButton onPress={() => handleAddTodo()}>
            <MaterialIcons name='send' color='#138A72' size={20} />
          </SendButton>
        </SendView>
        <Input
          space
          value={content}
          onChangeText={text => setContent(text)}
        />
      </FormTodo>

      {
        todo.map(todo => (
          <Todo key={todo._id}>
            <TodoView>
              <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>{todo.content}</Label>
              <DeleteButton
                onPress={() => deleteTodo(todo._id)}
              >
                <MaterialIcons name='close' color='#138A72' size={20} />
              </DeleteButton>
            </TodoView>
            <HR/>
          </Todo>
        ))
      }

      </Container>
    )
  }
}
