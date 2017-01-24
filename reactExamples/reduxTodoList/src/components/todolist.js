import React from "react";
import Todo from './todo.js';

export default class TodoList extends React.Component{
    
    render(){
        <ul>
            {this.props.todos.map(todo =>
                <Todo
                key={todo.id}
                {...todo}
                onClick={() => this.props.onTodoClick(todo.id)}
            />
            )}
        </ul>
    }
    
    
}