import React from 'react'
import { Card, Container } from './styles'

const LoginCardComponent = (content) => {
    return(
    <>
    <Container>
        <Card>
            {content.content}
        </Card>
    </Container>

    </>
    )
}

export default LoginCardComponent
