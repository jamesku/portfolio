import React from 'react';
import TodoListHeader from "./todo-list-header.js";
import TodoListItem from "./todo-list-item.js";

export default class TodosList extends React.Component {
    
    renderItems(){
        const props = _.omit(this.props, 'todos');
        let tasks = this.props.todos;
        
        return tasks.map((todo,index) => <TodoListItem key={index} {...todo} {...props}/>);
                      
    }
    
    render() {
        return ( 
            <table>
                <TodoListHeader />
            <tbody>
            {this.renderItems()}
            </tbody>
            </table>
            
            );}
}