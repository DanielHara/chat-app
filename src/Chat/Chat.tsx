import './Chat.css';

import { useEffect, useState } from 'react'

import { MessageList } from './MessageList';
import { SendMessageForm } from './SendMessageForm'
import { EStyle, IMessage } from './types'

const MY_USERNAME = 'daniel';

interface IChatProps {
    friendUsername: string;
}

export const Chat = ({ friendUsername }: IChatProps) => {
    const [messages, setMessages] = useState<(IMessage & {style: EStyle})[]>([]);

    useEffect(() => {
        if (!friendUsername) {
            return;
        }

        // TO-DO: simulate API call to fetch the messages from a particular friendUsername
        new Promise(resolve => setTimeout(resolve, 100)).then(() => {
            setMessages([{
                id: String(Math.random()),
                text: 'abc',
                username: 'daniel',
                style: EStyle.PRIMARY
            }, {
                id:  String(Math.random()),
                text: 'def',
                username: friendUsername,
                style: EStyle.SECONDARY
            }])
        })
    }, [friendUsername])

    return <div className="chat">
        <MessageList messages={messages} />
        <SendMessageForm onSuccess={(message) => {
            const postedMessage = {
                ...message,
                style: message.username === MY_USERNAME ? EStyle.PRIMARY : EStyle.SECONDARY,
            }
            setMessages(messages => messages.concat(postedMessage))
        }}/>
    </div>
}
