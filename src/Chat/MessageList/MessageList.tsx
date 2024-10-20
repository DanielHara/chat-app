import './MessageList.css';

import { Message } from './Message';
import type { IMessageProps } from './Message';

interface IMessageListProps {
    messages: (IMessageProps & { id: string })[]
}

export const MessageList = ({ messages }: IMessageListProps) => {
    return <ul className="list">
        {messages.map(( message ) => <li key={message.id}>
            <Message {...message} />
        </li>)}
    </ul>
}
