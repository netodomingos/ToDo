import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom'

import Api from '../../Services/Api'

import { 
    Container,
    Logo,
    Label,
    Input,
    Button
} from '../../Components/Form';

import logo from '../../Global/Assets/Logo.png'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    useEffect(() => {
        isLoggedUser()
    })

    const isLoggedUser = () => {
        const token = localStorage.getItem('token')

        if( token !== null ){
            return history.push('/main/' + token)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        const data = {
            email,
            password
        }

        try{
            const response = await Api.post('/session', data)

            history.push('/main/' + response.data.user)

            localStorage.setItem('token', response.data.user)

            setEmail('')
            setPassword('')

        }catch(err){
            console.log(err);
        }
    }

  return (
    <Container>
        <Logo src={logo} />
        
       <form onSubmit={handleLogin}>
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
                <Link to='/register'>Not registered? Sign up</Link>
            </div>
            
            <Button type='submit'>Sign in</Button>
        </form>

    </Container>
  );
}
