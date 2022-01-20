import React from 'react'
import { Button } from './styles'

const ButtonComponent = (content) => {
    return(
    <>
        <Button>
            {content.content}
        </Button>
    </>
    )
}

export default ButtonComponent