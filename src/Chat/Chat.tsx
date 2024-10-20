import './Chat.css';

export const Chat = () => {
    const messages = ['abc', 'def', 'def', 'def', 'def', 'def', 'def', 'abc', 'def', 'def', 'def', 'def', 'def', 'def', 'hdd', 'dad','dada'];

    return <div className="chat">
        {messages.map(message => <p>{message}</p>)}
        <form>
            <label>Type your message here:</label>
            <input />
            <button>
                Send
            </button>
        </form>
    </div>
}
