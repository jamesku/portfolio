import React from "react";

export default class Footer extends React.Component{
    
    render(){
        
    return(
        if (this.props.active) {
        return <span>{this.props.children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         this.props.onClick()
       }}
    >
      {this.props.children}
    </a>
  )
    
    
}