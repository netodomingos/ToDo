import React, { useState } from 'react';

import { useFonts } from '@use-expo/font'

import { AppLoading } from 'expo'

import { useNavigation } from '@react-navigation/native'

import Api from '../../Services/Api'

import { ActivityIndicator } from 'react-native'

import { 
  Container,
  Logo,
  Form,
  Label,
  Input,
  Button,
  ButtonText
} from '../../Components/Components';

import logo from '../../Global/Logo.png'

export default function Register() {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repeat, setRepeat ] = useState('')
  const [ loading, setLoading ] = useState(false)

  const handleRegister = async () => {
    setLoading(true)
  
    if(email == '' || password == '' || name == '' || repeat == ''){
      alert('Campos não preenchidos, tente novamente!')
      
      setLoading(false)
    }
  
    try{
  
      if(password == repeat){
  
        const data = {
          name,
          email,
          password,
          repeat
        }
  
        await Api.post('/user', data)
  
  
        setLoading(false)
        setEmail('')
        setPassword('')
        setName('')
        setRepeat('')
  
        navigation.navigate('login')
      } else {
        alert('As senhas não são iguais')
  
        setLoading(false)
        setEmail('')
        setPassword('') 
        setName('')
        setRepeat('')
      }
  
    }catch(err){
      alert(err)
    }
  }

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
      
      <Form>
        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Name</Label>    
        <Input
          space
          value={name}
          onChangeText={Name => setName(Name)}
        />

        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Email</Label>    
        <Input
          space
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={email => setEmail(email)}
        />

        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Password</Label>    
        <Input
          space
          autoCapitalize='none'
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />

        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Repeat</Label>    
        <Input
          space
          autoCapitalize='none'
          secureTextEntry={true}
          value={repeat}
          onChangeText={repeat => setRepeat(repeat)}
        />

        <Button
          onPress={() => handleRegister()}
        >
          {
            loading ? (
              <ActivityIndicator color='#FFF' size={23} />
            ) : (
              <ButtonText style={{ fontFamily: 'MontserratAlternates-Bold' }}>Sign up</ButtonText>
            )
          }
        </Button>
      </Form>


      </Container>
    )
  }
}
