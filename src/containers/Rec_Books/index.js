import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Container, Text } from './styles'
import { GET_REC_BOOKS_BY_USER } from './graphql'
import Rec_BooksTable from '../../components/Rec_BooksTable'
import { useHistory } from 'react-router-dom'
import jwt_decode from "jwt-decode"


const Rec_Books = () => {
    const history = useHistory()
    let token = localStorage.getItem('token')
    if(!token){
        history.push('/')
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxOTJkN2RlLTEyNDctNDc0OS1iMDU5LTllODM5ODk0ZDEyNiIsImlhdCI6MTY0Mjc4MTIyNH0.hzGDNwACQRazjeGc8g1mZooYS7_Bm_x45e2Ebv8BD6g'
    }
    const ID = jwt_decode(token).id
    const {loading, error, data} = useQuery(GET_REC_BOOKS_BY_USER, {
        variables: {userID: ID}})
    if (loading) 
    {
        return <Container><Text>Loading...</Text></Container>
    } else if (error)
    {
        return <Container><Text>Error!</Text></Container>
    }
    return (
        <Container>
            <Rec_BooksTable data={data} />
        </Container>
    )
}

export default Rec_Books
