import React from 'react';
import {
    Helmet
} from 'react-helmet';
import { Container } from '../../globalStyles';

export const Home = () => {
    return ( 
    <>
        <Helmet> <title> Qserv quiz | Home </title></Helmet>
        <Container>
            <h2>I 'm from home page </h2>
        </Container>
    </>
    )
}