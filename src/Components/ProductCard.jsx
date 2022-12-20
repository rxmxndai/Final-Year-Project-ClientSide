import styled from "styled-components"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const Container = styled.div`
  margin: 10px 0px;
  max-width: 230px;
  padding: 10px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 2px;

  &:hover {
    border: 1px solid lightgray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

`

const Image = styled.img`
  background-color: #f5f7f8;
  overflow: hidden;
  object-fit: contain;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform .3s ease;
  transform: scale(0.8);
  border-radius: 2px;

  &:hover {
    transform: scale(1);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`


const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 10px;
`


const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color:  #0171b6;
  margin: 10px;
`




const ProductCard = ({ data }) => {
  return (
    <Container >
        <Image src={data.img} />
      <Wrapper>
        <Title> {data.title} </Title>
      </Wrapper>
      <Info>
        <Price> RS {data.price} </Price>
        <AddBoxOutlinedIcon 
          sx= {{cursor: 'pointer'}}
        fontSize="medium"  color="primary"/>
      </Info>
    </Container>
  )
}

export default ProductCard