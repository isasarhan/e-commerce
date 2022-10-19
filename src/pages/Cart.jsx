import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Container = styled.div``
const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    padding:20px;
    flex-direction:column;
    font-family:'Courier New', Courier, monospace;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 15px;
    font-weight: 600;
    cursor:pointer;
    border:${props => props.type === "filled" && "none"};
    background-color:${(props) => props.type === "filled" ? "black" : "transparent"};
    color:${props => props.type === "filled" && "white"};
`
const Title = styled.h1`
    font-weight: 300;
    text-align:center;
`

const TopTexts = styled.div`
`
const TopText = styled.span`
    text-decoration:underline;
    padding:10px;
    cursor:pointer;
    `
const Bottom = styled.div`
    display: flex;
    justify-content:space-between;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content: space-between;
`
const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    padding:20px;
    display:flex;
    justify-content: space-between;
    flex-direction:column;
`
const ProductDetails = styled.div`
    flex:2;
    display:flex;
    align-items: center;

`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.span`
    height:20px;
    width:20px;
    border-radius:50%;
    background-color:${props => props.color};
`
const PriceDetails = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const ProductSize = styled.div``
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    padding:10px;
    font-size: 24px;
    margin:5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    padding:20px;
    border-radius:3%;
`
const SummaryTitle = styled.h1``
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
`
const SummaryItemText = styled.div``
const SummaryItemPrice = styled.div``
const SummaryItemButton = styled.button`
    padding: 15px;
    font-weight: 600;
    background-color:black;
    color:white;
    border:1px ;
    width:100%;
    cursor:pointer;
`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="/images/product 2.png" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 094509845094</ProductId>
                                    <ProductColor color="red"></ProductColor>
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>5</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>30$</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItemButton>Order</SummaryItemButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
