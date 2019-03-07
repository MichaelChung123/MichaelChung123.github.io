import React, { Component } from 'react';
import './_navbar.scss';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="mainNav">
                <Navbar light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    {/* <Collapse isOpen={this.state.isOpen} navbar> */}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/MichaelChung123">Github</NavLink>
                            </NavItem>
                            <UncontrolledDropdown>
                                <DropdownToggle nav caret>
                                    Projects
                            </DropdownToggle>
                                <DropdownMenu left>
                                    <DropdownItem>
                                        OnTime
                                </DropdownItem>

                                    <DropdownItem divider />

                                    <DropdownItem>
                                        Bjük
                                </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    {/* </Collapse> */}
                </Navbar>
                {/* <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                    </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                      </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                      </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                      </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar> */}
            </div>
        );
    }
}

{/* <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">Title</a>
                        <button className="navbar-toggler navbar-toggler-right">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}