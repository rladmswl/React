import React, { Component } from "react";
import TOC from './Component/TOC.js';
import Subject from "./Component/Subject";
import Content from "./Component/Content";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode:'read',
            selected_content_id:2,
            subject: {title: "WEB", sub: "World Wide Web"},
            welcome: {title: "Welcome", desc: "Hello, React!"},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is for information'},
                {id: 2, title: 'CSS', desc: 'CSS is for design'},
                {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
            ]
        }
    }
    render() {
        var _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            var i = 0;
            while (i < this.state.contents.length) {
                var data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
        }

        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({mode:'welcome'});
                    }.bind(this)}
                >
                </Subject>
                {/*<header>
                    <h1><a href="/" onClick={function(e) { // 링크를 클릭했을 때, 실행되도록.
                        console.log(e);
                        e.preventDefault();
                        this.setState({
                            mode:'welcome'
                        });
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>*/}
                <TOC
                    onChangePage={function (id) {
                    this.setState({
                        mode:'read',
                        selected_content_id:Number(id)
                    });
                }.bind(this)}
                     data = {this.state.contents}>
                </TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;