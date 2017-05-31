import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react'

import Moment from 'react-moment';

class ChatMessage extends Component{

    render(){
        const {date, mainUser, text} = this.props
        var textAlign = "left"
        var textColor = "teal"

        if(mainUser){
            textAlign = "right"
            textColor = "blue"
        }

        return(
            <Container textAlign={textAlign}>
                <Message compact color={textColor}>
                    {text}
                    <span className="messageDate">
                        <Moment fromNow>{date}</Moment>
                    </span>
                </Message>
            </Container>
        )
    }
}

export default ChatMessage;