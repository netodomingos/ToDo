import React from 'react';

import { useFonts } from '@use-expo/font'

import { AppLoading } from 'expo'

import { useNavigation } from '@react-navigation/native'

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

export default function Login() {
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
        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Email</Label>    
        <Input
          space
        />

        <Label style={{ fontFamily: 'MontserratAlternates-Regular' }}>Passwords</Label>    
        <Input
        
        />

        <SignUpContainer 
          onPress={() => navigation.navigate('register')}
        >
          <SignUpText>Not registered? Sign up</SignUpText>
        </SignUpContainer>

        <Button
          onPress={() => navigation.navigate('main')}
        >
          <ButtonText style={{ fontFamily: 'MontserratAlternates-Bold' }}>Sign in</ButtonText>
        </Button>
      </Form>


      </Container>
    )
  }
}
