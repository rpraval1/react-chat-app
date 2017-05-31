import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'

import ChatScreen from './ChatScreen'

class ChatApp extends Component {
    constructor(props){
        super(props);

        this.state = {
            user1typing: false,
            user2typing: false,
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

    updateMessages(newMessage){
        var messages = this.state.messages
        messages.push(newMessage)
        this.setState({
            messages
        })
    }

    typingState(userID){
        console.log(userID)
        if(userID == 1){
            this.setState({
                user1typing: true
            })
        } else {
            this.setState({
                user2typing: true
            })
        }
    }

    endTypingState(userID){
        if(userID == 1){
            this.setState({
                user1typing: false
            })
        } else {
            this.setState({
                user2typing: false
            })
        }
    }

    render() {
        let {users, user2, messages, user1typing, user2typing} = this.state

        return (
            <Container >
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <ChatScreen mainUser={1} users={users} messages={messages} 
                            updateMessages={this.updateMessages.bind(this)} 
                            typingState={this.typingState.bind(this)} 
                            endTypingState={this.endTypingState.bind(this)} 
                            status={user2typing}
                            user2name="Rob"
                            />                
                        </Grid.Column>
                        <Grid.Column>
                            <ChatScreen mainUser={2} users={users} messages={messages} 
                            updateMessages={this.updateMessages.bind(this)} 
                            typingState={this.typingState.bind(this)} 
                            endTypingState={this.endTypingState.bind(this)} 
                            status={user1typing}  
                            user2name="Laura"                     
                            />                                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default ChatApp;