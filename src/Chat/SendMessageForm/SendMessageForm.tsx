import { IMessage } from '../types'

interface ISendMessageFormProps {
    onSuccess: (message: IMessage) => void,
}

export const SendMessageForm = ({ onSuccess }: ISendMessageFormProps) => {
    return <form onSubmit={(event) => {
        event.preventDefault();

        const form = event.target;

        // TO-DO: find the correct typing
        // @ts-ignore
        const formData = new FormData(form);

        const text = formData.get('text')

        if (typeof text !== 'string') {
            return;
        }

        // TO-DO: find the correct typing
        // @ts-ignore
        form.reset();
        
        // Simulate API call, and onSuccess should be called with the payload of a successful POST API call (including the id of posted message)
        Promise.resolve(1000).then(() => {
            onSuccess({
                id: String(Math.random()),
                text,
                username: 'daniel',
            });
        })
    }}>
        <label>Type your message here:</label>
        <input name="text" required/>
        <button type="submit">
            Send
        </button>
    </form>
}
