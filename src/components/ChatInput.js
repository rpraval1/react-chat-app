import React, { Component } from 'react';
import { Container, Input } from 'semantic-ui-react'


class ChatInput extends Component{

    deleteMessage(e){
        const{users, mainUser} = this.props
        
        if(e.keyCode === 8 && e.target.value === ''){
            this.props.endTypingState(mainUser)        
        }
    }

    sendMessage(e){
        const{users, mainUser} = this.props
        
        if (e.key === 'Enter') {
            var newMessage = {
                id:mainUser,
                text:e.target.value,
                date: new Date()
            }
            e.target.value = ""
            this.props.updateMessages(newMessage)
            this.props.endTypingState(mainUser)
        } else {
            this.props.typingState(mainUser)
        }
        
        
    }

    render(){
        return(
            <Container fluid className="chatInput">
                <Input fluid placeholder='Type your message...' 
                onKeyPress={this.sendMessage.bind(this)}
                onKeyDown={this.deleteMessage.bind(this)}
                 />
            </Container>
        )
    }
}

export default ChatInput;