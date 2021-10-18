import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../util/validation/validation";
import { Textarea } from "../../common/FormControls/FormControls";
import s from './MyPosts.module.css'

const maxLength10 = maxLengthCreator(10);

const AddPost = (props) => {
	const onSubmit = (formData) => {
		props.addPost(formData)
	}
	return <ReduxAddPostFrom onSubmit={onSubmit} />
}
const AddPostForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<Field validate={[required, maxLength10]} name='body' component={Textarea} placeholder='Enter your text' className={s.post_text} />
		<br />
		<button className={s.send}>Add new post</button>
	</form>
}


const ReduxAddPostFrom = reduxForm({ form: 'addPost' })(AddPostForm)
export default AddPost;