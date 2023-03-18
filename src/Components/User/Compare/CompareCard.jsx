import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  margin: 30px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; 
  border-radius: 20px;
  background-color: white;
`;


const ImageContainer = styled.div`
  height: 200px;
`;

const Image = styled.img`
width: 100%;
height: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: scale(0.8);

  &:hover {
    transform: scale(1);
  }
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const Infor = styled.span`
  display: flex;  
  justify-content: space-between;
  color: gray;
  font-weight: 500;
  padding: 5px;
`;
const Value = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #0171b6;
`;


const ProductDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 200px;
`;

const Desc = styled.span`
  padding: 10px;
  font-weight: 400;
`



const CompareCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ImageContainer>
        <Image
          onClick={() => navigate(`/product/${data._id}`)}
          src={data.images[0]?.url}
        />
      </ImageContainer>
      <Title> {data.title} </Title>
      <ProductInfoContainer>
        <Infor> Price  <Value> RS {data.price} </Value> </Infor>
        <Infor> InStock  <Value>  {data.quantity} </Value> </Infor>
        <Infor> Brand  <Value>  {data.quantity} </Value> </Infor>
        <Infor> Sales  <Value>  {data.sold > 0 ? data.sold : 0} </Value> </Infor>
      </ProductInfoContainer>

      <ProductDescContainer>
        <Infor>Description</Infor>
        <Desc>{data.description}</Desc>
      </ProductDescContainer>
    </Container>
  );
};

export default CompareCard;
