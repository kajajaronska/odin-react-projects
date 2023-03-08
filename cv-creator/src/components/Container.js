import React from "react";
import "../styles/Container.css";

class Container extends React.Component {
    render() {
        return (
            <div className="Container" id={this.props.id}>
                <h2 className="header">{this.props.header}</h2>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Container;