import React from 'react';
import s from './Message.module.css';
type Tprops = {
	message: string
}
const Message: React.FC<Tprops> = ({ message }) => {
	return <div className={s.message}>{message}</div>
}

export default Message;