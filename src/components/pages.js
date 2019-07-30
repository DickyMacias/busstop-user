import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Card, CardBody } from "shards-react";


const Pages = ({ pages }) => {
    return ( <
        React.Fragment > < Container >
        <
        Navbar bg = "dark"
        variant = "dark"
        expand = "true" >
        <
        Navbar.Brand href = "#home" >
        <
        img alt = ""
        src = "/logo.png"
        width = "30"
        height = "30"
        className = "d-inline-block align-top" / > < center > { 'Bus Stop CUU' } < /center>< /
        Navbar.Brand > < /
        Navbar > < /Container >

        <
        /
        React.Fragment >


    )
};

export default Pages