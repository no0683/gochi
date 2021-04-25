import { Component } from 'react';

export default class Article extends Component {
    render(){
      return (
        <div id="article_wrap">
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </div>
      );
    }
  }