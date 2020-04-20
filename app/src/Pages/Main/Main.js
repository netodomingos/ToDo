import React, { useState, useEffect } from 'react';

import { useFonts } from '@use-expo/font'

import { MaterialIcons } from '@expo/vector-icons'

import Api from '../../Services/Api'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { Text, AsyncStorage } from 'react-native'

import { AppLoading } from 'expo'

import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  Goback,
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

export default function Main() {
  const [ content, setContent ] = useState('')
  const [ todo, setTodo ] = useState([])
  const [ token, setToken ] = useState('')

  const navigation = useNavigation()
  
  useEffect(() => {
    UserIsLogged()
    getAllTodo()
  })

  const UserIsLogged = async () =>{
   
    const data = await AsyncStorage.getItem('token')

    if( data == null ){
      navigation.navigate('login')
    } else {
      setToken(data)
    }

  }
  
  const getAllTodo = async () => {
      const response = await Api.get('/todo/' + token)

      setTodo(response.data.todoList)
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

  const deleteTodo = async (id) => {
    await Api.delete(`/todo/${token}/${id}`)
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
        <Goback
          onPress={() => navigation.navigate('login')}
        >
            <MaterialIcons name='arrow-back' size={20} color='#138A72'  />
        </Goback>
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

        <TouchableOpacity 
          style={{ borderColor: '#138A72', backgroundColor: '#138A72' ,borderWidth: 1, borderRadius: 5, padding: 10, marginTop: 10 }}
          onPress={() => navigation.navigate('editor') }
        >
          <Text style={{ fontFamily: 'MontserratAlternates-Bold', color: '#FfF' }}>Discover the Image Editor</Text>
        </TouchableOpacity>
      
      </Container>
    )
  }
}
