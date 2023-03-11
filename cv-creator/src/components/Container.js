import React from "react";
import "../styles/Container.css";
import Button from "./Button";

class Container extends React.Component {
    render() {
        return (
            <div className="Container" id={this.props.id}>
                <h2 className="header">{this.props.header}</h2>
                <div className="content">
                    {this.props.children}
                <Button content="edit" class="btn-edit"/>
                <Button content="submit" class="btn-submit"/>
                </div>
            </div>
        )
    }
}

export default Container;