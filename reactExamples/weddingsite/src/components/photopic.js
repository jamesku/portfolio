import React from 'react';

export default class PhotoPic extends React.Component {
    constructor(props){
        super(props);
    }  
    render() {
            
    return (  
        <img src={require("../assets/2scaled.jpg")} alt="">
        </img>
        }
        );
    }
}
