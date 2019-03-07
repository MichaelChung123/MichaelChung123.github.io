import React, { Component } from 'react';
import './_education.scss';
import { ListGroup, ListGroupItem, Jumbotron, Button, Container, Media } from 'reactstrap';

export default class Education extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="education">
                    <Container className="education-container">
                        <h1 className="display-3">Education</h1>
                        <hr />

                        <Media className="lhl">
                            <Media left>
                                <i class="edu-icon fas fa-scroll"></i>                            </Media>
                            <Media body>
                                <Media heading>
                                    <p className="lead">Lighthouse Labs</p>
                                </Media>
                                <p className="lead">Diploma of Web Development</p>
                            </Media>
                        </Media>

                        <Media className="bcit">
                            <Media left>
                                <i class="edu-icon fas fa-scroll"></i>                            </Media>
                            <Media body>
                                <Media heading>
                                <p className="lead">BCIT CIT Program</p>
                                </Media>
                                <p className="lead">Diploma of Technology</p>
                            </Media>
                        </Media>

                        {/* <p>Lighthouse Labs: Diploma of Web Development</p>
                        <p>BCIT CIT Program: Diploma of Technology</p> */}
                    </Container>
                </Jumbotron>
            </div >
        );
    }
}