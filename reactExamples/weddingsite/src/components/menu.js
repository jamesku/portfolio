import React from 'react';
import {Menu, MainButton, ChildButton} from 'react-mfb';

export default class FloatingMenu extends React.Component {
  render(){
      
    var effect = 'zoomin',
    pos = 'tr',
    method = 'hover';
    return (
      
    <Menu effect={effect} method={method} position={pos}>
      <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
      <ChildButton
        //onClick={function(e){ console.log(e); e.preventDefault(); }}
        icon="ion-social-github"
        label="Date/Time/Place"
        href="https://github.com/nobitagit/react-material-floating-button/" />
      <ChildButton
        icon="ion-social-octocat"
        label="RSVP"
        href="https://github.com/nobitagit" />
      <ChildButton
        icon="ion-social-twitter"
        label="Contribute"
        href="http://twitter.com/share?text=Amazing Google Inbox style material floating menu as a React component!&url=http://nobitagit.github.io/react-material-floating-button/&hashtags=material,menu,reactjs,react,component" />
    </Menu>
        );

  }
    componentDidMount(){
        console.log("hel");
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(event){
        
        console.log("hellosc");
    }
}

