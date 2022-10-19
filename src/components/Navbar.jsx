import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"

const Container = styled.div`
    height: 60px;
    margin-bottom:5px;
    ${mobile({ height: "50px" })}
`
const Language = styled.span`
cursor:pointer;
font-size:14;
${mobile({ display: "none" })}

`
const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}

`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}

`
const SearchContainer = styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px; 
    padding:5px;
`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({ padding: "10px 0px" })}
  
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Center = styled.div`flex:1;
    flex:1;
    text-align:center;
    ${mobile({padding:"0px"})}

`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:"2",justifyContent:"center"})}

`

const MenuItem = styled.div`
        font-size:14px;
        cursor:pointer;
        ${mobile({marginLeft:"10px"})}


`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
