import React, { Component } from 'react';
import { Row, Col, Media } from 'reactstrap';
import OnTime from '../img/ontime.png';
import Bjuk from '../img/bjuk.png';
import './_projects.scss';



export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    url: 'https://github.com/MichaelChung123/OnTime',
                    src: OnTime,
                    title: 'OnTime',
                    desc: 'Built a scheduling application for Lighthouse Labs to help the mentors with their booking routines.',
                    tech: 'Tech Stack: React, Javascript, Rails, Flexbox, HTML and CSS.'
                },
                {
                    url: 'https://github.com/MichaelChung123/resource-wall',
                    src: Bjuk,
                    title: 'Bjük',
                    desc: 'Created a resource wall type application which allows users to share and create educational resources with others.',
                    tech: 'Tech Stack: Javascript, PostgreSQL, HTML, CSS, Bootstrap, Express, jQuery, and Node.js'
                }
            ]

        }
    }

    render() {

        let projects = this.state.items.map((e, index) => {
            return (
                <Row className="project">
                    <Media>
                        <Col sm="12" md={{ size: 5, offset: 1 }}>
                            <Media left href={e.url}>
                                <Media object className="project-image" src={e.src} alt="OnTime" />
                            </Media>
                        </Col>
                        <Col sm="12" md={{ size: 5 }}>
                            <Media body>
                                <Media heading>
                                    {e.title}
                                </Media>

                                <p className="lead project-content">{e.desc}</p>
                                <strong><p className="lead techstack">{e.tech}</p></strong>
                            </Media>
                        </Col>
                    </Media>
                </Row>
            );
        });

        return (
            <div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 5 }}>
                        <h1 className="display-3 project-title">Projects</h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" md={{ size: 3, offset: 4}}>
                        <hr className="under-title" />
                    </Col>
                </Row>

                {projects}

                {/* <Row>
                    <Media>
                        <Col sm="12" md={{ size: 5, offset: 1 }}>
                            <Media left href="https://github.com/MichaelChung123/OnTime">
                                <Media object src={OnTime} alt="OnTime" />
                            </Media>
                        </Col>
                        <Col sm="12" md={{ size: 5 }}>
                            <Media body>
                                <Media heading>
                                    OnTime
                                </Media>
                                <Row className="item">
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                                <p className="project-content">Built a scheduling application for Lighthouse Labs to help the mentors with their booking routines.</p>
                                <strong><p className="techstack">Tech Stack: React, Javascript, Rails, Flexbox, HTML and CSS.</p></strong>
                            </Media>
                        </Col>
                    </Media>
                </Row> */}
            </div>
        );
    }
}