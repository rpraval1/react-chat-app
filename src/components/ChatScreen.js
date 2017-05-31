import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import ChatThread from './ChatThread'
import ChatInput from './ChatInput'

class ChatScreen extends Component{

    render(){
        const{mainUser, users, sent, received, messages} = this.props

        return(
            <Container>
                <ChatThread mainUser={mainUser} users={users} messages={messages} />
                <ChatInput />
            </Container>
        )
    }
}

export default ChatScreen;