import React from 'react';

export default class Gifts extends React.Component {
    constructor(props){
        super(props);
        
    }  
    render() {
            
    return (        
        <div>  
            <h1>Gifts</h1>
            <h5>Thankfully we have been blessed with many things and a small house! So we are asking only for financial support.  Can you sponsor a piece of the wedding? Let us know! or, otherwise, please donate below.  We tried to keep our costs low, but it still came out to about $60 per person, so that might be a good "recommended donation"</h5>
        
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"></input>
            <input type="hidden" name="hosted_button_id" value="HF6ZU28MLWKXE">
        </input>    
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!">
        </input>
        <img alt=""  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
        </form>
        
        
        </div>
        );
    }
}
