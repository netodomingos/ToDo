import React, { useState } from 'react';

import Api from '../../Services/Api'

import { useFonts } from '@use-expo/font'

import { AppLoading } from 'expo'

import { useNavigation } from '@react-navigation/native'

import { ActivityIndicator, AsyncStorage } from 'react-native'

import { 
  Container,
  Logo,
  Form,
  Label,
  Input,
  SignUpContainer,
  SignUpText,
  Button,
  ButtonText
} from '../../Components/Components';

import logo from '../../Global/Logo.png'
import { Alert } from 'react-native';

export default function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)

  let [ fontsLoaded ] = useFonts({
    'MontserratAlternates-Bold': require('../../../assets/Fonts/MontserratAlternates-Bold.ttf'),
    'MontserratAlternates-Regular': require('../../../assets/Fonts/MontserratAlternates-Regular.ttf')
  })

  const handleLogin = async () => {
    setLoading(true)

    try{
      
      if(email == '' || password == ''){
        Alert.alert('Campos não preenchidos, tente novamente!')
        
        setLoading(false)
      }


      const data = {
        email,
        password
      }

      const response = await Api.post('/session', data)

      setLoading(false)
      setEmail('')
      setPassword('')

      await AsyncStorage.setItem('token', response.data.user )

      navigation.navigate('main')

    }catch(err){
      Alert.alert(err)
    }

  }

  const navigation = useNavigation()

  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return (
      <Container>
        <Logo source={logo} />
      
      <Form>
        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Email</Label>    
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={email => setEmail(email)}
          space
        />

        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Passwords</Label>    
        <Input
          autoCapitalize='none'
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />

        <SignUpContainer 
          onPress={() => navigation.navigate('register')}
        >
          <SignUpText>Not registered? Sign up</SignUpText>
        </SignUpContainer>

        <Button
          onPress={() => handleLogin()}
        >
          {
            loading ? (
              <ActivityIndicator color='#FFF' size={23} />
            ) : (
              <ButtonText style={{ fontFamily: 'MontserratAlternates-Bold' }}>Sign in</ButtonText>
            )
          }
        </Button>
      </Form>


      </Container>
    )
  }
}
