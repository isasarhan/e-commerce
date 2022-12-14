import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
    flex-wrap:wrap;
    justify-content: space-between;
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map((product => (
                <Product item={product} key={product.id}/>
            )))}
        </Container>
    )
}

export default Products
