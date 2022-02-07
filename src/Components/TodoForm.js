import React, { useState } from "react";

import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { v4 } from "uuid";

const TodoForm = ({addTodos}) => { //passing addTodos method

    const [ todoString, setTodoString ] = useState("");

    const handleSubmit = (e) => { // e --> event
        e.preventDefault();

        if(todoString === ""){
            return alert("Todo is Empty!")
        }

        const todo = {
            todoString,
            id: v4(),
        }

        addTodos(todo)
        
        setTodoString("");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                     type="text"
                     name="todo"
                     id="todo"
                     placeholder="Enter a Todo"
                     value={todoString}
                     onChange={(e) => setTodoString(e.target.value)} // e --> event
                    />
                    <Button
                     color="success"
                    >
                        Add Todo
                    </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;