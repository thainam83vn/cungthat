import React from 'react';
import './screen.css';
import { List } from './list';

const CAUSIEU = "http://localhost:81";

export class Screen extends React.Component {
    constructor(props) {
        super(props);
        let arr = this.props.history.location.pathname.split('/');
        let today = "180128";
        this.state = {
            files: null, left: null, right: null,
            screen: arr[2],
            date: today
        }
        fetch(`${CAUSIEU}/files/${today}/${arr[2]}`)
            .then(res => res.json())
            .then(res => {
                console.log("Manhinh", res);
                let left = [];
                let right = [];
                for (let i = 0; i < res.files.length; i++) {
                    if (i % 2 == 0)
                        left.push(res.files[i]);
                    else
                        right.push(res.files[i]);

                }
                this.setState({ files: res.files, left: left, right: right });
            });
    }
    render() {
        if (this.state.files) {
            return (
                <div className="manhinh">
                    <List className="left" total={this.state.files.length} files={this.state.left} screen={this.state.screen} date={this.state.date} />
                    <div className="middle">
                        <img src={require("./images/baivi.jpg")} />
                    </div>
                    <List className="right" total={this.state.files.length} files={this.state.right} screen={this.state.screen} date={this.state.date} />
                </div>
            );
        }
        return null;
    }
}