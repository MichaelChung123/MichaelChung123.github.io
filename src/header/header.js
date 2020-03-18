import React, { Component } from 'react';
import './_header.scss';
import { Jumbotron, Button, Container, Media } from 'reactstrap';
import Socials from './socials';
import Portrait from '../img/portrait.jpg';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="mainHeader">
                    <Container className="container">
                        <Media>
                            <Media left href="#">
                                <Media object src={Portrait} alt="Generic placeholder image" className="portrait" />
                            </Media>
                            <Media body className="headerBody">
                                <Media heading>
                                    <h1 className="display-3">Michael Chungs</h1>
                                </Media>
                                <hr />
                                <p className="lead header-title">Full-Stack Web Developer</p>
                                <Button className="header-button">Find Out More!</Button>
                                <Socials />
                            </Media>
                        </Media>
                    </Container>
                </Jumbotron>
            </div >
        );
    }
}