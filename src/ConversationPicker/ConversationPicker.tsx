import './ConversationPicker.css';

interface IConversationPicker {
    onChange: (username: string) => void;
}

export const ConversationPicker = ({ onChange }: IConversationPicker) => {
    // TO-DO: these are the friend's usernames. In a real app, this also must be fetched from an API
    const friends = ['alice', 'robert', 'alex'];

    return <ul className='list'>
        Select your friend
        {friends.map(friend => <li key={friend} className='item'>
            <button onClick={() => {
                onChange(friend);
            }}>
                {friend}
            </button>
        </li>)}
    </ul>
}
