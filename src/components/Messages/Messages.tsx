import React from 'react';
import s from './Messages.module.css';
import { useSelector } from 'react-redux';
import AuthRedirect from '../../hoc/AuthRedirect';
import Message from './Message/Message';
import Dialogue from './Dialogue/Dialogue';
import AddMessage from './AddMessage';
import { getDialogues, getMessages } from '../../redux/messages-selectors';
import { List, Typography } from '@mui/material';

const Messages: React.FC = () => {
	const dialogues = useSelector(getDialogues)
	const messages = useSelector(getMessages)
	let dialoguesElements = dialogues.map(d => <Dialogue name={d.name} id={d.id} key={d.id} />);
	let messagesElements = messages.map(m => <Message message={m.message} key={m.id} />);
	return (
		<div className={s.Messages}>
			<List className={s.dialogues}>
				<Typography variant='h5' component='h5' sx={{ ml: 1 }}>Active Dialogues</Typography>
				{dialoguesElements}
			</List>
			<div className={s.messaging}>
				<div className={s.messages}>{messagesElements}</div>
				<AddMessage />
			</div>
		</div>
	);
}
export default AuthRedirect(Messages)