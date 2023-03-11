import React from "react";
import "../styles/Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
            
                <div className="full-name">
                    <input className="first-name" type="text" placeholder="first name" value=""></input>
                    <input className="last-name" type="text" placeholder="last name" value=""></input>
                </div>

                <div className="contact-details">
                    <input className="email" type="email" placeholder="your email goes here"></input>
                    <input className="phone-number"></input>
                </div>
            </div>
        )
    }
}

export default Header;