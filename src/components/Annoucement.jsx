import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color:teal;
    color:white;
    display:flex;
    font-weight:bolder;
    align-items:center;
    justify-content:center;
`

const Annoucement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on orders over 50$!
        </Container>
    )
}



export default Annoucement
