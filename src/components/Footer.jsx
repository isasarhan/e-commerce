import { Facebook, Instagram, Mail, MailOutline, Pinterest, Room, WhatsApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display:flex;
`

const Left = styled.div`
    flex:1;
    flex-direction:column;
    padding:20px;
`

const Center = styled.div`
    flex:1;
`

const Right = styled.div`
    flex:1;

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
`
const SocialContainer = styled.div`
    display:flex;
    

`
const Desc = styled.div`
    flex:1;
    margin:20px 0;

`
const Logo = styled.h1`
    flex:1;
`
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    margin:5px;
    border-radius:50%;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#${props => props.color};
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    display:flex;
    list-style:none;
    margin: 0;
    padding: 0;
    flex-wrap:wrap;
`

const ListItems = styled.li`
    width:50%;
    margin-bottom: 10px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Lama.</Logo>
                <Desc>Lose john poor same it case do year we. Full how way even the sigh. Extremely nor furniture fat questions now provision incommode preserved. Our side fail find like now. Discovered travelling for insensible partiality unpleasing impossible she. Sudden up my excuse to suffer ladies though or. Bachelor possible marianne directly confined relation as on he.</Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='25D366'>
                        <WhatsApp />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful LInks
                </Title>
                <List>
                    <ListItems>Home</ListItems>
                    <ListItems>Cart</ListItems>
                    <ListItems>Checkout</ListItems>
                    <ListItems>wishlist</ListItems>
                    <ListItems>Fashion</ListItems>
                    <ListItems>Terms & Conditions</ListItems>
                    <ListItems>2Home</ListItems>
                    <ListItems>2Cart</ListItems>
                    <ListItems>2Checkout</ListItems>
                    <ListItems>2wishlist</ListItems>
                    <ListItems>2Fashion</ListItems>
                    <ListItems>2Terms & Conditions</ListItems>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/>Address</ContactItem>
                <ContactItem><Mail style={{marginRight: "10px"}}/>Phone</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/> Email</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
