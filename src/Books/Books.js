import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component {
    constructor (props) {
        super(props);
        this.state = {
            books: [
            {
                id: 1,
                title: "Book 1",
                author: "Author 1",
                isbn: "000001"
            },
            {
                id: 2,
                title: "Book 2",
                author: "Author 2",
                isbn: "000002"
            },
            {
                id: 3,
                title: "Book 3",
                author: "Author 3",
                isbn: "000003"
            },
            {
                id: 4,
                title: "Book 4",
                author: "Author 4",
                isbn: "000004"
            },
            {
                id: 5,
                title: "Book 5",
                author: "Author 5",
                isbn: "000005"
            },
            {
                id: 6,
                title: "Book 6",
                author: "Author 6",
                isbn: "000006"
            },
            {
                id: 7,
                title: "Book 7",
                author: "Author 7",
                isbn: "000007"
            },
            {
                id: 8,
                title: "Book 8",
                author: "Author 8",
                isbn: "000008"
            }
            ]
        };
    }
        
    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }

    
}