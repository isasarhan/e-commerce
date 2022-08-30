import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color: coral;
    position:relative;
`
const Arrow = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#fff7f7;
    opacity:0.5;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
`
const Wrapper = styled.div`
    height: 100px;
`
const Image = styled.img`
    height:100%;
`
const Slide = styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    align-items:center;
    
`
const ImgContainer = styled.div`
    height:500px;
    
flex:1;
`
const InfoContainer = styled.div`
    flex:1;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Slide>
                <Wrapper>
                    <ImgContainer><Image/></ImgContainer>
                    <InfoContainer></InfoContainer>
                </Wrapper>
            </Slide>
            <Arrow direction="right"><ArrowRightOutlined /></Arrow>
        </Container>
    )
}

export default Slider
