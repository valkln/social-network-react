import React from "react";
import s from './MyPosts.module.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { actions } from "../../../redux/profile-reducer";

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
		onSubmit={formik.handleSubmit}
		className={s.myMessage}>
		<textarea
			name="body"
			className={s.post_text}
			placeholder='Enter your message'
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			value={formik.values.body}
		/>
		<button className={s.send} type="submit" >Submit</button>
		{formik.touched.body && formik.errors.body ? <div className={s.error}>{formik.errors.body}</div> : null}
	</form >
};
export default AddPost;