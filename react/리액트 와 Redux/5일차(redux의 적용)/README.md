# react-redux 기능

### connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(연결할 컴포넌트);

1. connect의 두 번째 괄호는 감싸야할 부품(컴포넌트) 이름을 입력하게되면 입력한 부품을 감싸면서 감싸기위한 별도의 컴포넌트 생성이 필요없음
2. connect의 첫 번째 괄호는 컨테이너 컴포넌트가 store와 통신할수 있는 기능을 담당하고 2가지 인자로 구성됨

-첫번째 인자는 store로부터 state값을 가져와(기존 getState()와 동일) 연결된 하위 컴포넌트에게 값을 props로 전달

[ 코드 화면 ]

```C
import DisplayNumber from '../Components/DisplayNumber';
import { connect } from 'react-redux';

// 이 함수의 인자는 store.getState(); 와 같음
function mapReduxStateToReactProps(state){
  return {
// 여기서 number 프로퍼티는 연결된 하위 컴포넌트에게 전달될 props와 같음
    number: state.number
  }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//     state = { number: store.getState().number };
//     constructor(props) {
//       super(props);
//       store.subscribe(
//         function () {
//           this.setState({ number: store.getState().number });
//         }.bind(this)
//       );
//     }
//     render(){
//         return(
//             <DisplayNumber number={this.state.number}></DisplayNumber>
//         )
//     }
// }
```

-두번째 인자는 store에 action값을 dispatch 할뿐만아니라 연결된 하위 컴포넌트에게 props값도 제공

[ 코드 화면 ]

```C
import AddNumber from '../Components/AddNumber';
import {connect} from 'react-redux';

// 이 함수의 인자는 store.dispatch 와 같음
function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick: function(size){
            dispatch({ type: "INCREMENT", size: size });
        }
    }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// import { Component } from 'react';
// import store from '../store';

// // react 부품에서 직접 store와 통신하게되면 부품으로서의 재사용성이라는 가치가 사라짐
// // 그렇기에 store와 통신하게되는 역할들은 익명의 컴포넌트로 넘기고 해당 부품을 감싸줌

// export default class extends Component {
//     render(){
//         return (
//             <AddNumber onClick={function(size){
//                 store.dispatch({ type: "INCREMENT", size: size });
//             }}></AddNumber>
//         )
//     }
// }
```

### Provider

1. 최상위 컴포넌트를 감싸고 최상위 컴포넌트에서 store를 import하고 <Provider>컴포넌트에 props로 store를주면 하위 컴포넌트에서 일일이 store를 import하지않고 사용 할 수 있음

[ 코드 화면 ]

```C
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import store from './store';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
```
