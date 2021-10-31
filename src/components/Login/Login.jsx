import React from 'react';
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormControls/FormControls'
import { required } from '../../util/validation/validation'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
const Login = (props) => {
	const onSubmit = (data) => {
		props.login(data.email, data.password, data.rememberMe, data.captcha)
		console.log({ data })
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	} else return <div>
		<h1 className={s.header}>Login</h1>
		<ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
	</div>
}
const LoginForm = (props) => {
	return <form className={s.form} onSubmit={props.handleSubmit} >
		<div className={s.field}>
			<Field
				className={s.input}
				name='email'
				component={Input}
				placeholder={'email'}
				validate={[required]} />
		</div>
		<div className={s.field}>
			< Field
				type='password'
				className={s.input}
				name='password'
				component={Input}
				placeholder={'password'}
				validate={[required]} />
		</div>
		<div className={s.field}>
			< Field name='rememberMe' component={Input} type={"checkbox"} /> remember me
		</div>
		{props.error && <div className={s.summary_error}>{props.error}</div>}
		{props.captchaUrl ? <div classname={s.captcha} >
			<img classname={s.captchaPic} src={props.captchaUrl} alt="" />
			<div className={s.field}><Field
				className={s.input}
				name='captcha'
				component={Input}
				placeholder={'captcha'}
				validate={[required]} /></div>
		</div> : null}
		<div className={s.field}>
			<button className={s.btn}>Log in</button>
		</div>
	</form>
}
const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);
const msp = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})
export default connect(msp, { login })(Login);