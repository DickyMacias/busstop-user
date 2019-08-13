import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "shards-react";

// componente funcional para mostrar el navegador superior
const Pages = ({ pages }) => {
    return ( 
    // regresa un componente de JSX
    <React.Fragment> 
        <Container>
            {/* Se llama un componente navegador para el uso del titulo*/}
            <Navbar bg = "dark"
            variant = "dark"
            expand = "true">
            {/* Se asigna una imagen en el navegador*/}
                <Navbar.Brand href = "#home">
                    <img alt = ""
                    src = {process.env.PUBLIC_URL + '/images/logo.png'}
                    width = "30"
                    height = "30"
                    className = "d-inline-block align-top"    
                    /> 
                    {/* Texto de la imagen en el navegador*/}
                    . Bus Stop CUU
                </Navbar.Brand> 
            </Navbar> 
        </Container>
    </React.Fragment>


    )
};

export default Pages