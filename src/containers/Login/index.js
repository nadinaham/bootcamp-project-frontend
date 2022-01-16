import React from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import CardComponent from '../../components/CardComponent'
import { FlexContainer, Input } from './styles'

const Login = () => {
    const content = 
        <>
            <FlexContainer>
                <Input placeholder = "email"></Input>
            </FlexContainer>
            <FlexContainer>
                <Input placeholder = "password"></Input>
                <Input placeholder = "confirm password"></Input>
            </FlexContainer>
            <ButtonComponent content = "Submit!"/>
        </>;
    return(
        <> 
            <CardComponent content = {content} ></CardComponent>
            <div>DOES THIS STUFF EXIST</div>
        </>
    )

}

export default Login
