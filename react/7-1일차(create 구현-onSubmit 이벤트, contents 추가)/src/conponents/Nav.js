import React, { Component } from "react";

class Nav extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            // 속성을 이용한 이벤트 처리
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.MyEvent(e.target.dataset.id); // target은 a태그를 가리키고 data-(set)의 id로 접근
            }.bind(this)}
            // 매개변수를 이용한 이벤트 처리
            onClick={function (id, e) {
              e.preventDefault();
              this.props.MyEvent(id);
            }.bind(this, data[i].id)} // 두번째인자의 값이 function의 첫번째 인자값이됨
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default Nav;
