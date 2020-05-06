import React from "react";
import { Button } from "react-bootstrap";


export function AuthorTableRow(props) {
    return (
        <div>
            
            
                        <th>{props.author.author}</th>
                        <Button variant="warning">Learn More</Button>
                       
        </div>
    );
}

/*export function AuthorTableRow(props) {
    return (
        <ListGroup>
            <div class="list-group-item d-flex justify-content-between align-items-center">
                
            <span class="badge badge-primary badge-pill">14</span>
            </div>
        </ListGroup>
    );
} */