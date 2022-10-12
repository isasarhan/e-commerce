import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { popularProducts } from '../data'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display:flex;

`
const ImgContainer = styled.div`
    flex:1;
    padding:10px;

`
const Image = styled.img`
    width:100%;    
    height:90vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding :0px 15px;
`
const Title = styled.h1`
    font-weight:200;

`
const Desc = styled.p`
    margin : 20px 0px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`

const FilterContainer = styled.div`
    width:50%;
    margin: 30px 0px;
    display: flex;
    align-items:center;
    justify-content: space-between;


`
const Filter = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
        
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`
const FilterColor = styled.div`
    border-radius:50%;
    width: 20px;
    height: 20px;
    background-color:${props => props.color};
    margin: 0px 5px;
    
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`
    padding: 10px;
`
const AddContainer = styled.div`
    width: 50%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const AmountContainer = styled.div`
    display:flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display:flex;
    align-items:center;
    justify-content: center;
    margin: 0px 15px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor:pointer;
    font-weight: 500;


    &:hover{
        background-color:#f8f4f4;
    }
`



const Product = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Image src={popularProducts[0].img}></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>The product title</Title>
                    <Desc>Lose john poor same it case do year we. Full how way even the sigh. Extremely nor furniture fat questions now provision incommode preserved. Our side fail find like now. Discovered travelling for insensible partiality unpleasing impossible she. Sudden up my excuse to suffer ladies though or. Bachelor possible marianne directly confined relation as on he</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                            <FilterColor color="red" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select>
                                <Option selected>Size</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}
export default Product
