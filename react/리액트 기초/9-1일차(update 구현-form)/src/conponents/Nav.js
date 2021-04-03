import React, { Component } from "react";

class Nav extends Component {
  shouldComponentUpdate(newProps, newState) {
    // 첫 번째 인자는 새로추가된 값, 두 번째 인자는 이전 값
    console.log(newProps.data, this.props.data);

    if (this.props.data === newProps.data) {
      return false; // false 일경우 아래 render 함수는 실행이 안됨
    }
    return true; // true 일경우 아래 render 함수 실행
  }

  // 결론: 값이 새로 추가되지않는 이벤트에대해서는 중복적으로 render가 되는것을 막음
  // (프로젝트의 크기가 작을때는 필수는 아니지만 크기가 클경우에는 shouldComponentUpdate 함수 사용)

  render() {
    console.log("nav render");
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
