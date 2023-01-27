import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductCard from './Products/ProductCard'
import {publicRequest} from "../requestMethods/requestMethods"

const Container = styled.div`
    padding: 10px 50px;
`

const Title = styled.h1`
    color: #0171b6;
    display: table;
    padding: 20px;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 3px solid #0171b6;
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TopSales = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const getTopSold = async () => {
            try {
                const response = await publicRequest.get("/products")
                setData(response.data.products)
            }
            catch (err) {
                console.log(err);
            }
        }

        getTopSold();
    }, [])

  return (
    <Container>
        <Title>
            Top Sold Products
        </Title>

        <Wrapper>
            {data?.length > 0 ?  
                data?.map(element => (
                    <ProductCard data={element} key={element._id} /> ))
            : "Failed retrieving products!"  }
        </Wrapper>
    </Container>
  )
}

export default TopSales