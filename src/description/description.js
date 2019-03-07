import React, { Component } from 'react';
import './_description.scss';
import { Jumbotron, Button, Container, Media } from 'reactstrap';

export default class Description extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="description">
                    <Container className="description-container">
                        <h1 className="display-3">Summary</h1>
                        <hr className="my-2" />
                        <p className="lead">
                            Full-Stack Web Developer with a passion for building apps from an education in technology and experience as a
                            technical support agent. Great skills to work in synergy with a team and proactive when it comes to all aspects of
                            a project due to extensive experience working on multiple application projects. My technical support experience
                            built my habits by exposing me to a professional team environment as well as allowing me to solidify my knowledge
                            and develop strong communication skills. I am a strong believer that adapting to the industry is the key in making
                            a great product. Fluent in both English and French.
                        </p>
                    </Container>
                </Jumbotron>
            </div >
        );
    }
}