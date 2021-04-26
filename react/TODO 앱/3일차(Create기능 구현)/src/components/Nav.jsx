import { Component } from 'react';

export default class Nav extends Component {
    render(){
      var lists = [];
      var data = this.props.data;
      for(var i = 0; i < data.length; i++){
        lists.push(
          <li key={data[i].id}>
            <input type="checkbox"></input>
            <a>{data[i].title}</a>
            <span id="nav_del"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg></span>
            <span id="nav_upd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"/></svg></span>
            <span id="nav_rd">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                data-id={data[i].id}
                onClick={function(e){
                  e.preventDefault();
                  this.props.MyEvent(e.target.dataset.id);
                }.bind(this)}
                >
                <path 
                  d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"
                  data-id={data[i].id}
                  onClick={function(e){
                    e.preventDefault();
                    this.props.MyEvent(e.target.dataset.id);
                  }.bind(this)}
                  />
              </svg>
            </span>
          </li>
        );
      }
      return (
        <div id="nav_wrap">
          <ul>
            {lists}
            <li>
              <span id="nav_pl">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  onClick={function(e){
                    e.preventDefault();
                    this.props.MyEvent2("create");
                  }.bind(this)}
                  >
                    <path 
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                </svg>
              </span>
            </li>
          </ul>
        </div>
      );
    }
  }