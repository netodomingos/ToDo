import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Logo = styled.Image`
    width: 120px;
    height: 120px;
    margin-bottom: 50px;
`

export const Form = styled.View`
    width: 85%;
`

export const FormTodo = styled.View`
    width: 85%;
    flex-direction: column;
`

export const SendView = styled.View`
    align-items: flex-end;
`
export const SendButton = styled.TouchableOpacity``
export const DeleteButton = styled.TouchableOpacity``

export const Todo = styled.View`
    width: 85%;
    margin-top: 20px;
`

export const TodoView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const HR = styled.View`
    border-bottom-width: 1px;
    margin: 3px 0 10px 0;
    border-color: #138A72;
`

export const Label = styled.Text`
    font-size: 20px;
    color: #138A72;
`

export const Input = styled.TextInput`
    border: none;
    width: 100%;
    padding: 2px;
    border-bottom-width: 1px;
    border-bottom-color: #138A72;
    margin-bottom: ${props => props.space ? '20px' : '0px'};
`

export const SignUpContainer = styled.TouchableOpacity`
    margin: 20px 0;
`
export const SignUpText = styled.Text`
    color: #138A72;
    text-decoration: underline;
`

export const Button = styled(RectButton)`
    background-color: #138A72;
    padding: 15px;
    border-radius: 25px;
`
export const ButtonText = styled.Text`
    text-align: center;
    color: #FFF;
`