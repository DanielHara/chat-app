import './Message.css';
import { EStyle } from "../types";

export interface IMessageProps {
    text: string;
    style: EStyle;
}

export const Message = ({ text, style }: IMessageProps) => {
    return <span className={`base ${style === EStyle.PRIMARY ? 'primary' : 'secondary'}`}>
        {text}
    </span>
}
