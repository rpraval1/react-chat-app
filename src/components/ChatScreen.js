import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

import ChatThread from './ChatThread'
import ChatInput from './ChatInput'

class ChatScreen extends Component{

    render(){
        return(
            <Container>
                <ChatThread />
                <ChatInput />
            </Container>
        )
    }
}

export default ChatScreen;