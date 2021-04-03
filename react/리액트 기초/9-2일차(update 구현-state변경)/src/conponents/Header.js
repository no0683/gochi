import React, { Component } from "react";

class Header extends Component {
  render() {
    console.log("header render");
    return (
      <header>
        <h1>
          <a
            href="#"
            onClick={function (e) {
              e.preventDefault();
              this.props.MyEvent();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        <p>{this.props.desc}</p>
      </header>
    );
  }
}

export default Header;
