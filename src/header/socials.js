import React, { Component } from 'react';
import './_socials.scss';

export default class Socials extends Component {
    render() {
        return (
            <div className="socials-container">
                <a href="https://www.linkedin.com/in/michael-chung-99a1b0120/"><i class="fab fa-linkedin" href="#"></i></a>
                <a href="https://github.com/MichaelChung123"><i class="fab fa-github-square"></i></a>
                <a href="mailto: michaelchung4567@gmail.com"><i class="fas fa-envelope-square"></i></a>
            </div>
        );
    }
}