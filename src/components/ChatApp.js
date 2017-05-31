import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'

import ChatScreen from './ChatScreen'

class ChatApp extends Component {
    render() {
        return (
            <Container >
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <ChatScreen username="Laura" />                
                        </Grid.Column>
                        <Grid.Column>
                            <ChatScreen username="Rob" />                                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default ChatApp;