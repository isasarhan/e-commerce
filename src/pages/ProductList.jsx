import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import styled from 'styled-components'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`
        
`
const Title = styled.h1`
        
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
        
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`
    padding: 10px;

`

const ProductList = () => {

    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Title></Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Filter Size</FilterText>
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
            <Products />
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default ProductList
