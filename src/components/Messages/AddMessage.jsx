import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './Messages.module.css';

const AddMessage = (props) => {
	const onSubmit = (formData) => {
		props.addMessage(formData.body)
	}
	return (
		<ReduxMessageForm onSubmit={onSubmit} />
	)
};
const MessageForm = (props) => {
	return <form onSubmit={props.handleSubmit} className={s.myMessage}>
		<Field name='body' component='textarea' placeholder='Enter your message' className={s.text} />
		<button className={s.send}>send</button>
	</form>
}

const ReduxMessageForm = reduxForm({ form: 'addMessage' })(MessageForm)
export default AddMessage;