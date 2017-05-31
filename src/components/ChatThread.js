import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import ChatMessage from './ChatMessage'

class ChatThread extends Component{

    renderThread(){
        const {messages, mainUser} = this.props
        return messages.reverse().map(message=>{
            if(mainUser == message.id){
                return <ChatMessage mainUser={true} text={message.text} date={message.date} />
            } else {
                return <ChatMessage mainUser={false} text={message.text} date={message.date} />                
            }
        })
    }

    render(){
        return(
            <Container className="chatThread">
                {this.renderThread()}
            </Container>
        )
    }
}

export default ChatThread;