import AddNumber from '../Components/AddNumber';
import { Component } from 'react';
import store from '../store';

// react 부품에서 직접 store와 통신하게되면 부품으로서의 재사용성이라는 가치가 사라짐
// 그렇기에 store와 통신하게되는 역할들은 익명의 컴포넌트로 넘기고 해당 부품을 감싸줌

export default class extends Component {
    render(){
        return (
            <AddNumber onClick={function(size){
                store.dispatch({ type: "INCREMENT", size: size });
            }}></AddNumber>
        )
    }
}