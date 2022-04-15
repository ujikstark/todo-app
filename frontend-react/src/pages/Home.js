import React from "react";
import { Col, Container, Row, Image, Button, Card } from "react-bootstrap";
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import img from '../assets/img';


function Home() {
    return (
        <Container>
            <Helmet><title>Homepage</title></Helmet>
            <h1 className="mt-3 mb-3">Homepage</h1>
            <Card className="mt-4 m-2 pe-3 ps-3 shadow">
                <Card.Body>
                    <Card.Title className="mb-5">Welcome !</Card.Title>
                    <div className="h5 text-start fw-normal">
                        <div className="mb-3">
                        This website has been developed for personal learning purposes on different front-end and back-end technologies. It is made of a React SPA and a Symfony API. The API documentation can be seen here. 
                        </div>        
                        <div className="mb-3">
                        The API is consumed by a fully functional JWT authentication and small applications found in the navigation bar.
                        </div>        
                        <div className="mb-3">
                        The full codebase is available on Github
                        </div>   
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default Home;