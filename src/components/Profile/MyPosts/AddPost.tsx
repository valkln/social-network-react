import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { actions } from "../../../redux/profile-reducer";
import { Button, TextField, Typography } from "@mui/material";

const AddPost: React.FC = () => {
	const dispatch = useDispatch()
	const addPost = (data: string) => {
		dispatch(actions.addPostAC(data))
	}
	const formik = useFormik({
		initialValues: {
			body: ''
		},
		validationSchema: Yup.object({
			body: Yup.string()
				.required('Post can\'t be empty')
		}),
		onSubmit: (values) => {
			addPost(values.body)
			formik.resetForm({})
		},
	});
	return <form
		onSubmit={formik.handleSubmit}>
		<TextField
			multiline
			fullWidth
			rows={4}
			name="body"
			placeholder='Enter your message'
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.body}
		/>
		<Button variant='contained' color='secondary' type="submit" >Submit</Button>
		{formik.touched.body && formik.errors.body ? <Typography sx={{ border: '2px solid red' }} variant='subtitle1' component='span'>{formik.errors.body}</Typography> : null}
	</form >
};
export default AddPost;