import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          isEditing:false, 
          isComplete:false
        };
    }  
    
    renderTaskSection(){
        
        const taskStyle = {
            color: this.props.isCompleted ? 'green': 'red',
            cursor: "pointer"
        };

        if(this.state.isEditing){
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                    <input type="text" defaultValue={this.props.task} ref="editInput" /> 
                    </form>
                </td>
            )
        }
        
        return(
                <td style={taskStyle} onClick={this.props.toggleTask.bind(this, this.props.task)}>
                {this.props.task}
                </td>
        );
    }
    
    renderActionSection(){
        if (this.state.isEditing){
            return (
                <td> 
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }
    
    render() {  
        
          console.log("hello");
          return ( 
           <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
           </tr>
          );

    }
    
    onEditClick(){
            this.setState({ isEditing: true});
    }    
    
    onCancelClick(){
            this.setState({ isEditing: false});
    }    

    onSaveClick(e){
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing:false});
    }
    
}