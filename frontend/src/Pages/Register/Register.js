import React, { useState } from 'react';

import Api from '../../Services/Api'

import { useHistory } from 'react-router-dom'

import { 
  Container,
  Logo,
  Label,
  Input,
  Button
} from '../../Components/Form';

import logo from '../../Global/Assets/Logo.png'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')

    const history = useHistory()

     const handleRegister = async (e) =>{
      e.preventDefault()

      const data = {
        name,
        email,
        password,
        repeat
      }

      try{

        await Api.post('/user', data)

        alert('Usuário criado com sucesso!')

        history.goBack()

      }catch(err){
        alert('Erro no Formulário')
      }
    }

  return (
    <Container>
        <Logo src={logo} />

        <form onSubmit={handleRegister}>
          <div>
              <Label>Name</Label>
              <Input
                value={name}
                onChange={text => setName(text.target.value)}
              />
          </div>

          <div>
              <Label>Email</Label>
              <Input
                value={email}
                onChange={text => setEmail(text.target.value)}
              />
          </div>
          
          <div>
              <Label>Password</Label>
              <Input
                type='password'
                value={password}
                onChange={text => setPassword(text.target.value)}
              />
          </div>

          <div>
              <Label>Repeat</Label>
              <Input
                type='password'
                value={repeat}
                onChange={text => setRepeat(text.target.value)}
              />
          </div>

        <Button type='submit'>Sign up</Button>

        </form>
    </Container>
  );
}
