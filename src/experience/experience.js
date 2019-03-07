import React, { Component } from 'react';
import './_experience.scss';
import { Jumbotron, Media, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import OnTime from '../img/ontime.png';

export default class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="experience">
                    <h1 className="exp-header display-3">Experience</h1>

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                // className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                {/* <i class="fas fa-headset"></i> */}
                                <p className="lead">Squirrel Systems</p>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                // className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                {/* <i class="fas fa-briefcase"></i> */}
                                <p className="lead">CPA Canada</p>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                // className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                {/* <i class="fas fa-glass-whiskey"></i> */}
                                <p className="lead">Ninja Bubble Tea</p>
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">

                            <Media className="job-container">
                                <Media left>
                                    <i class="job-icon fas fa-headset"></i>
                                </Media>
                                <Media body>
                                    <Media heading>
                                    <h1 className="display-5">Squirrel Systems</h1>
                                    </Media>
                                    <p className="lead">
                                        Assisted customers in troubleshooting and maintaining their restaurant POS (Point of Sale) Systems.  Built valuable product service skills by collaborating with customers remotely and over the phone.
                                    </p>
                                </Media>
                            </Media>
                        </TabPane>

                        <TabPane tabId="2">

                            <Media className="job-container">
                                <Media left>
                                    <i class="job-icon fas fa-briefcase"></i>
                                </Media>
                                <Media body>
                                    <Media heading>
                                    <h1 className="display-5">CPA Canada</h1>
                                    </Media>
                                    <p className="lead">
                                        Worked part time with the Assessment team during the marking of the CGA final Examinations. My role was mostly in the IT area, overseeing scanning and any IT related requests, distribution and verification.
                                    </p>
                                </Media>
                            </Media>
                        </TabPane>

                        <TabPane tabId="3">

                            <Media className="job-container">
                                <Media left>
                                    <i class="job-icon fas fa-glass-whiskey"></i>
                                </Media>
                                <Media body>
                                    <Media heading>
                                    <h1 className="display-5">Ninja Bubble Tea</h1>
                                    </Media>
                                    <p className="lead">
                                        Developed strong customer service skills while operating in a team to make and serve drinks, open and close the store, and handle the cash register.
                                    </p>
                                </Media>
                            </Media>

                        </TabPane>
                    </TabContent>
                </Jumbotron>
            </div >
        );
    }
}