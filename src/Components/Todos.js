import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaCheckDouble } from "react-icons/fa";

const Todos = ({todos, markComplete}) => {

    return(
        <ListGroup className="mt-5 mt-2 items">
            {todos.map((todo) => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span style={{float: "right"}}
                        onClick={() => markComplete(todo.id)}
                    >
                        <FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );

}

export default Todos;