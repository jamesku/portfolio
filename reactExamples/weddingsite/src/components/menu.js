import React from 'react';
import {Menu, MainButton, ChildButton} from 'react-mfb';


export default class FloatingMenu extends React.Component {
  render(){
      
    var effect = 'zoomin',
    pos = 'tl',
    method = 'hover';
    return (
    <Menu effect={effect} method={method} position={pos}>
    <MainButton onClick={()=> this.handleClick()} iconResting="ion-plus-round" iconActive="ion-close-round" resetComponet={this.setComponent.bind(this)} />
      <ChildButton
        onClick={() => this.setComponent(1)}
        icon="ion-heart"
        label="Times & Places"
        />
      <ChildButton
        onClick={() => this.setComponent(2)}
        icon="ion-email"
        label="RSVP"
        />
      <ChildButton
        onClick={() => this.setComponent(3)}
        icon="ion-bag"
        label="Registry"
        />
      <ChildButton
        onClick={() => this.setComponent(4)}
        icon="ion-home"
        label="Accomodations"
        />
    </Menu>
        );

  }

 handleClick(){
         console.log("yoyoyoyoyo")
         this.props.setSelection(0);
    }  

    setComponent(x){
        console.log("got here " +x);
        if(x>0){
        this.props.setSelection(x);
        }
        else{
            this.props.setSelection(0);
        }
    }
}