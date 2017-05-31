import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import ChatThread from './ChatThread'
import ChatInput from './ChatInput'
import ChatTyping from './ChatTyping'

class ChatScreen extends Component{

    render(){
        const{mainUser, users, sent, received, messages, status, user2name} = this.props

        return(
            <Container>
                <ChatThread mainUser={mainUser} users={users} messages={messages} />
                <ChatTyping status={status} user2name={user2name} />
                <ChatInput mainUser={mainUser} users={users} 
                updateMessages={this.props.updateMessages}
                typingState={this.props.typingState}
                endTypingState={this.props.endTypingState}
                />
            </Container>
        )
    }
}

export default ChatScreen;