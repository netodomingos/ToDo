import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: ${props => props.main ? '800px': '500px'};
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% ;
  }

  div{
    width: 100%;
    margin: 20px 0;
  }

  a{
    color: #138A72;
    text-align: start
  }
`;

export const Logo = styled.img`
  width: ${props => props.main ? '100px': '200px'};
  height: ${props => props.main ? '100px': '200px'};
  margin-bottom: ${props => props.main ? '40px': '20px'};
`
export const InputTodo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  button{
    border: none;
    background-color: transparent;
    outline: none;
    display: flex;
    justify-content: flex-end;
  }
`

export const Label = styled.label`
  color: #138A72;
  font-size: 24px;
  line-height: 29px;
  font-family: 'Montserrat Alternates', sans-serif;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #138A72;
  width: 100%;
  height: 30px;
` 
export const Button = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 30px;
  background-color: #138A72;
  color: #FFF;
  font-weight: bold;
  font-size: 22px;
  border: none;
  outline: none;
`

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;

  div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    button{
      border: none;
      background-color: transparent;
      outline: none;
    }
  }

`

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid #138A72;
`