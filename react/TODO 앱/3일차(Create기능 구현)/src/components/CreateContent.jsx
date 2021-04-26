import { Component } from 'react';

export default class CreateContent extends Component {
    render(){
        return(
            <article id="createContent_wrap">
                <form method="post" onSubmit={function(e){
                    e.preventDefault();
                    if(e.target.title.value === ""){
                        alert("제목을 입력 해주세요");
                    }else if(e.target.desc.value === "") {
                        alert("내용을 입력 해주세요");
                    } else {
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }
                }.bind(this)} >
                    <p>
                        <input class="input" type="text" name="title" placeholder="제목을 입력 하세요"></input>
                    </p>
                    <p>
                        <textarea class="input" name="desc" placeholder="내용을 입력 하세요"></textarea>
                    </p>
                    <p>
                        <input class="input" type="submit" value="만들기"></input>
                    </p>
                </form>
            </article>
        );
    }
}