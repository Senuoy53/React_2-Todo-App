import React from 'react'
import './index.css'

// Bootstrap
import { Button } from 'react-bootstrap';

const CustomButton = ({contenu}) => {
    return(
        // <button><i class="fas fa-plus"></i></button>
        //  <Button><FontAwesomeIcon icon={faPlus}/></Button>
        <Button>{contenu}</Button>
    )
}

export default CustomButton