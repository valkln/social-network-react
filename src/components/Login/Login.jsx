import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls'
import { required } from '../../util/validation/validation'
const Login = () => {
	const onSubmit = (formData) => {
		console.log({ formData })
	}
	return <div>
		<h1 className={s.header}>Login</h1>
		<ReduxLoginForm onSubmit={onSubmit} />
	</div>
}
const LoginForm = (props) => {
	return <form className={s.form} onSubmit={props.handleSubmit} >
		<div className={s.field}>
			<Field
				className={s.input}
				name='login'
				component={Input}
				placeholder={'login'}
				validate={[required]} />
		</div>
		<div className={s.field}>
			< Field
				className={s.input}
				name='password'
				component={Input}
				placeholder={'password'}
				validate={[required]} />
		</div>
		<div className={s.field}>
			< Field name='rememberMe' component={Input} type={"checkbox"} /> remember me
		</div>
		<div className={s.field}>
			<button className={s.btn}>Log in</button>
		</div>
	</form>
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
export default Login;