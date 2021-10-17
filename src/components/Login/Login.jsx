import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
const Login = (props) => {
	const onSubmit = (formData) => {
		console.log({ formData })
	}
	return <div>
		<h1 className={s.header}>Login</h1>
		<ReduxLoginForm onSubmit={onSubmit} />
	</div>
}
const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit} >
		<div>
			<Field name='login' component='input' placeholder={'login'} />
		</div>
		<div>
			< Field name='password' component='input' placeholder={'password'} />
		</div>
		<div>
			< Field name='rememberMe' component='input' type={"checkbox"} /> remember me
		</div>
		<div>
			<button>Log in</button>
		</div>
	</form>
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
export default Login;