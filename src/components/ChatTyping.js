import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class ChatTyping extends Component{

    render(){
        const{status, user2name} = this.props
        var text = ""
        if(status){
            text = user2name + " is typing..."
        }
        return(
            <Container fluid>
                {text}
            </Container>
        )
    }
}

export default ChatTyping;
