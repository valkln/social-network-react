import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../util/validation/validation";
import { Textarea } from "../common/FormControls/FormControls";
import s from './Messages.module.css';

const maxLength50 = maxLengthCreator(50)
type TAddMessageProps = {
	addMessage: (message: string) => void
}
const AddMessage: React.FC<TAddMessageProps> = ({ addMessage }) => {
	const onSubmit = (formData: any) => {
		addMessage(formData.body)
	}
	return (
		<ReduxMessageForm onSubmit={onSubmit} />
	)
};
type TMessageFormProps = {
	handleSubmit: (formData: any) => void
}
const MessageForm: React.FC<TMessageFormProps> = ({ handleSubmit }) => {
	return <form onSubmit={handleSubmit} className={s.myMessage}>
		<Field name='body' validate={[required, maxLength50]} component={Textarea} placeholder='Enter your message' className={s.text} />
		<button className={s.send}>send</button>
	</form>
}

const ReduxMessageForm = reduxForm({ form: 'addMessage' })(MessageForm)
export default AddMessage;