import './Chat.css';
import { MessageList } from './MessageList';
import { EStyle } from './types'

export const Chat = () => {
    const messages = [{
        id: '1',
        text: 'abc',
        username: 'daniel',
        style: EStyle.PRIMARY
    }, {
        id: '2',
        text: 'def',
        username: 'alice',
        style: EStyle.SECONDARY
    }];

    return <div className="chat">
        <MessageList messages={messages} />
        <form>
            <label>Type your message here:</label>
            <input />
            <button>
                Send
            </button>
        </form>
    </div>
}
