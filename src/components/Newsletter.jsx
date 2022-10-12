import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom:20px;

`
const Desc = styled.div`
  margin-bottom:20px;
  font-size: 24px;
  font-weight:400;
`
const InputContainer = styled.div`
  height:40px;
  width:50%;
  background-color: #fff;
  display:flex;
  border: 1px solid lightgray;
  justify-content: space-between;

`
const Input = styled.input`
  flex:7;
  border:none;
`
const Button = styled.button`
  flex:1;
  border:none;
  background-color: teal;
  color:white;
`




const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from our newsletter</Desc>
      <InputContainer>
        <Input />
        <Button><Send /></Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
