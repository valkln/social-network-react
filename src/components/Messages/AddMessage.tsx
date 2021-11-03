import { useFormik } from "formik";
import React from "react";
import s from './Messages.module.css';
import * as Yup from 'yup';
type TProps = {
	addMessage: (body: string) => void
}
const AddMessage: React.FC<TProps> = (props) => {
	const formik = useFormik({
		initialValues: {
			body: ''
		},
		validationSchema: Yup.object({
			body: Yup.string()
				.required('Message can\'t be empty')
		}),
		onSubmit: (values) => {
			props.addMessage(values.body)
		},
	});
	return <form
		onSubmit={formik.handleSubmit}
		className={s.myMessage}>
		<textarea
			name="body"
			className={s.text}
			placeholder='Enter your message'
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.body}
		/>
		<button className={s.send} type="submit" >Submit</button>
		{formik.touched.body && formik.errors.body ? <div className={s.error}>{formik.errors.body}</div> : null}
	</form >
};
export default AddMessage;