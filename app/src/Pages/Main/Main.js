import React from 'react';

import { useFonts } from '@use-expo/font'

import { MaterialIcons } from '@expo/vector-icons'

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

export default function Main() {
  let [ fontsLoaded ] = useFonts({
    'MontserratAlternates-Bold': require('../../../assets/Fonts/MontserratAlternates-Bold.ttf'),
    'MontserratAlternates-Regular': require('../../../assets/Fonts/MontserratAlternates-Regular.ttf')
  })

  const navigation = useNavigation()

  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
      <Container>
        <Logo source={logo} />
      
      <FormTodo>
        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>What do you have to do?</Label>
        <SendView>
          <SendButton>
            <MaterialIcons name='send' color='#138A72' size={20} />
          </SendButton>
        </SendView>
        <Input
          space
        />
      </FormTodo>

      <Todo>
        <TodoView>
          <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>task</Label>
          <DeleteButton>
            <MaterialIcons name='close' color='#138A72' size={20} />
          </DeleteButton>
        </TodoView>
        <HR/>
      </Todo>

      </Container>
    )
  }
}
