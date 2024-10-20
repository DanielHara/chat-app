import './Chat.css';

import { useState } from 'react'

import { MessageList } from './MessageList';
import { SendMessageForm } from './SendMessageForm'
import { EStyle } from './types'

export const Chat = () => {
    const [messages, setMessages] = useState([{
        id: '1',
        text: 'abc',
        username: 'daniel',
        style: EStyle.PRIMARY
    }, {
        id: '2',
        text: 'def',
        username: 'alice',
        style: EStyle.SECONDARY
    }]);

    return <div className="chat">
        <MessageList messages={messages} />
        <SendMessageForm onSuccess={(message) => {
            const postedMessage = {
                ...message,
                style: message.username === 'daniel' ? EStyle.PRIMARY : EStyle.SECONDARY,
            }
            setMessages(messages => messages.concat(postedMessage))
        }}/>
    </div>
}
