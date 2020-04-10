import React, { Component } from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorsDisplay";

export default class Authors extends Component {
    constructor (props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    title: "Book 1",
                    author: "Jim",
                    isbn: "000001"
                },
                {
                    id: 2,
                    title: "Book 2",
                    author: "Jym",
                    isbn: "000002"
                },
                {
                    id: 3,
                    title: "Book 3",
                    author: "Jam",
                    isbn: "000003"
                },
                {
                    id: 4,
                    title: "Book 4",
                    author: "Jom",
                    isbn: "000004"
                },
                {
                    id: 5,
                    title: "Book 5",
                    author: "Jem",
                    isbn: "000005"
                },
                {
                    id: 6,
                    title: "Book 6",
                    author: "Jum",
                    isbn: "000006"
                },
                
                ]
            };
        }
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorsDisplay authors={this.state.authors}/>
                </div>
            </div>
            );
    }
}
