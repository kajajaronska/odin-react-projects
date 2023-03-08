import React from "react";
import "../styles/Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="full-name">
                    <div className="first-name">FIRST NAME</div>
                    <div className="last-name">LAST NAME</div>
                </div>

                <div className="contact-details">
                    <div className="email">your-email@mail.com</div>
                    <div className="phone-number">###########</div>
                </div>
            </div>
        )
    }
}

export default Header;