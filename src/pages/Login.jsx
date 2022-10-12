import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(#9d44447f, #e6b5b57f);
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 25%;
    background-color:white;
    padding: 20px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    border:none;
    padding: 12px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration:underline;
    cursor:pointer;
`


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
