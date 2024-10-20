import './Message.css';
import { EStyle } from "../types";

export interface IMessageProps {
    text: string;
    style: EStyle;
    username: string;
}

export const Message = ({ text, style, username }: IMessageProps) => {
    return <span className={`base ${style === EStyle.PRIMARY ? 'primary' : 'secondary'}`}>
        {`${text}, from ${username}`}
    </span>
}
