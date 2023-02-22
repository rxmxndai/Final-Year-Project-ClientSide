import { DeleteOutline } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import DataTable from '../../Components/AdminComponents/Tables/DataTable';
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories, getAllProducts } from '../../Redux/apiCalls';
import { useEffect } from 'react';


const Container = styled.div`
    flex: 5;
    padding: 20px;
    background-color: #f5f7f8;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Title = styled.h1`
  font-size: 24px;
    font-weight: 500;
    color: gray;
`

const AddButton = styled(Button)`
    text-transform: unset !important;
`

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`
const ViewButton = styled(Button)`
  padding: 2px 5px;
  border-radius: 5px;
  cursor: pointer;
  color: #0171b6;
  border: 1px solid #0171b6;
`

const DelBtn = styled(Button)`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`
export const StatusCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const Profile = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
`

export const StatusButton = ({type}) => {
  return <Button size={"small"} > {type} </Button>  
}


const ProductsTab = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    getAllProducts(dispatch)
    getAllCategories(dispatch)
  }, [dispatch ])


  const {products} = useSelector(state => state.product)
  const {categories} = useSelector(state => state.product)

  const getCatName = (id) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i]._id === id) {
        return categories[i].slug;
      }
    }
    return id;
  }

  const actionColumn =  [
    { field: "_id", headerName: "ID", flex: 3},
    {
      field: "image",
      headerName: "Product",
      flex: 3,
      renderCell: (params) => {
        return (
          <StatusCell >
            <Profile  src={params.row.images[0]?.url} />
            {params.row.title}
          </StatusCell>
        )
      },
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 3,
      renderCell: (params) => {
        return (
          getCatName(params.row.category)
        )
      } 
    },
    {
      field: "quantity",
      headerName: "Stock",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      renderCell: (params) => {
        return (
          <ActionCell>
            <ViewButton onClick={() => navigate(`/admin/product/${params.row._id}`)}> View </ViewButton>
            <DelBtn size="small" variant="text" color="error">
              <DeleteOutline />
            </DelBtn>
          </ActionCell>
        )
      }
    }
  ]

  return (
    <Container>
      <Wrapper>
        <Title> Products List </Title>
        <Link to={"/admin/product/add"} >
          <AddButton  variant='contained'> Add Category </AddButton>
        </Link>
      </Wrapper>
      <DataTable 
          rows={products} 
          columns={actionColumn} 
      />
    </Container>
  )
}

export default ProductsTab