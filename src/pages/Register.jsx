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
    width: 40%;
    background-color:white;
    padding: 20px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    width:100%;
    margin: 20px 0px;

`
const Button = styled.button`
    width: 100%;
    border:none;
    
    padding: 12px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>By registering to this form i assume you approve our <b>privacy policy</b></Agreement>
                    <Button>SUBMIT</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
