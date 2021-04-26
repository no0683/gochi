import { Component } from 'react';

export default class ReadContent extends Component {
    render(){
      return (
        <div id="readContent_wrap">
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </div>
      );
    }
  }