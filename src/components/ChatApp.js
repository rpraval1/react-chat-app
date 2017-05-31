import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'

import ChatScreen from './ChatScreen'

class ChatApp extends Component {
    constructor(props){
        super(props);

        this.state = {
            users:{
                user1:{
                    id: 1,
                    name: 'Laura'
                },
                user2:{
                    id: 2,
                    name: 'Rob'
                }
            },
            // user1Messages: [],
            // user2Messages: [],
            messages: [
                {
                    id: 1,
                    text: "Hello, Rob!",
                    date: "1976-04-19T12:59-0500"
                },
                {
                    id: 2,
                    text: "Hello, Laura!",
                    date: "2014-04-19T12:59-0500"
                },
                {
                    id: 1,
                    text: "How are you Rob?",
                    date: "2014-04-19T13:59-0500"
                },
                {
                    id: 2,
                    text: "I am doing good, Laura!",
                    date: "2014-04-19T15:59-0500"
                },
            ]
        }
    }

    render() {
        let {users, user2, messages} = this.state

        return (
            <Container >
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <ChatScreen mainUser={1} users={users} messages={messages} />                
                        </Grid.Column>
                        <Grid.Column>
                            <ChatScreen mainUser={1} users={users} messages={messages} />                                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default ChatApp;