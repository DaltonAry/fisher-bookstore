import React from "react";
import {AuthorTableRow} from "./AuthorTableRow";

export function AuthorsDisplay(props) {
        return (
            <div className="display">
                <h4 className="bg-primary text-white text-center p-2">
                All Available Authors
                </h4>
                <table className="table table-striped table-bordered">Name:
                {props.authors.map(a => (
                    <AuthorTableRow author={a} key={a.id} />
                ))}
                </table>
            </div>
        );
    }
