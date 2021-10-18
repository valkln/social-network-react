import React from "react";
import { Field, reduxForm } from "redux-form";
import s from './MyPosts.module.css'

const AddPost = (props) => {
	const onSubmit = (formData) => {
		props.addPost(formData)
	}
	return <ReduxAddPostFrom onSubmit={onSubmit} />
}
const AddPostForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<Field name='body' component='textarea' placeholder='Enter your text' className={s.post_text} />
		<br />
		<button className={s.send}>Add new post</button>
	</form>
}


const ReduxAddPostFrom = reduxForm({ form: 'addPost' })(AddPostForm)
export default AddPost;