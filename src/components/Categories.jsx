import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from "../responsive"


const Container = styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({ padding:"0px", flexDirection:"column"})}
    padding:20px;
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
