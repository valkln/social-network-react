import { useFormik } from "formik";
import React from "react";
import s from './Messages.module.css';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { actions } from "../../redux/messages-reducer";
import { Button, TextField } from "@mui/material";

const AddMessage: React.FC = () => {
	const dispatch = useDispatch()
	const submit = (body: string) => {
		dispatch(actions.addMessage(body))
	}
	const formik = useFormik({
		initialValues: {
			body: ''
		},
		validationSchema: Yup.object({
			body: Yup.string()
				.required('Message can\'t be empty')
		}),
		onSubmit: (values) => {
			submit(values.body)
			formik.resetForm()
		},
	});
	return <form
		onSubmit={formik.handleSubmit}
		className={s.myMessage}>
		<TextField
			multiline
			rows={4}
			name="body"
			fullWidth
			placeholder='Enter your message'
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.body || ''}
		/>
		{formik.touched.body && formik.errors.body ? <div className={s.error}>{formik.errors.body}</div> : null}
		<Button className={s.button} variant='contained' color='secondary' type="submit" >send</Button>
	</form >
};
export default AddMessage;