import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input, Textarea } from "../../common/FormControls/FormControls"
import s from './ProfileInfo.module.css'
const EditProfile = ({ profile, ...props }) => {
	const onSubmit = (data) => {
		//props.updateProfle(data)
		//.then(() => {
		//props.setEditMode(false)
		//})
		console.log(data)
	}
	return <ReduxUserDataForm profile={profile} onSubmit={onSubmit} />
}
const UserDataForm = ({ profile, handleSubmit, error }) => {
	return <form onSubmit={handleSubmit}>
		<div> Username:
			<Field name='fullName'
				component={Input}
				placeholder={profile.fullName} />
		</div>
		<div>Looking for a job: <Field name='lookingForAJob'
			component={'input'}
			type='checkbox' />
		</div>
		<div>Skills: <Field name='lookingForAJobDescription'
			component={Textarea}
			rows='5'
			cols='50'
			placeholder={profile.lookingForAJobDescription} />
		</div>
		<div>About Me: <Field name='aboutMe'
			component={Textarea}
			rows='5'
			cols='50'
			placeholder={profile.aboutMe} />
		</div>
		<div>Contacts:
			{Object.keys(profile.contacts).map(key => {
				return <div key={key}>
					{key} : <Field name={'contacts.' + key} component={Input} />
				</div>
			})}
		</div>
		{error ? <div className={s.error}>{error}</div> : null}
		<button className={s.btn}>Save Changes</button>
	</form>
}
const ReduxUserDataForm = reduxForm({ form: 'edit-profile' })(UserDataForm);
export default EditProfile;