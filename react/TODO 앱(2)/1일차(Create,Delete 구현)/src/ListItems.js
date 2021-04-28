import { Component } from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function ListItems(props) {
//     const items = props.items;
//     const listItems = items.map(item => {
//         return <div className="list" key={item.key}>
//             <p>{item.text}</p>
//         </div>
//     })
//     return(
//         <div>{listItems}</div>
//     )
// }

// export default ListItems;

export default class ListItems extends Component {
    render(){
        return(
            this.props.items.map(function(item) {
                return <div className="list" key={item.key}>
                            <p>
                                {item.text}
                                <span>
                                    <FontAwesomeIcon 
                                        className="faicons" 
                                        icon="trash"
                                        onClick={function(){
                                            this.props.deleteItem(item.key)
                                        }.bind(this)}
                                        >
                                    </FontAwesomeIcon>
                                </span>
                            </p>
                        </div>
            }.bind(this))
        );
    }
}