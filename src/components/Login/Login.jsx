import React from 'react';
import s from './Login.module.css'
import { login } from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = (props) => {
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	} else return <div>
		<h1 className={s.header}>Login</h1>
		<LoginForm login={props.login} captchaUrl={props.captchaUrl} />
	</div>
}
const msp = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl
})
export default connect(msp, { login })(Login);

const LoginForm = (props) => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false,
			captcha: null
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required')
		}),
		onSubmit: (values) => {
			props.login(values.email, values.password, values.rememberMe, values.captcha)
		},
	});
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	else return <form
		onSubmit={formik.handleSubmit}
		className={s.form}>
		<div className={s.field}>
			<label className={s.label} htmlFor="email">Email Address</label>
			<input
				name="email"
				type="email"
				className={s.input}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
			{formik.touched.email && formik.errors.email ? <div className={s.error}>{formik.errors.email}</div> : null}
		</div>
		<div className={s.field}>
			<label className={s.label} htmlFor="password">Password</label>
			<input
				name="password"
				type="password"
				className={s.input}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.password}
			/>
			{formik.touched.password && formik.errors.password ? <div className={s.error}>{formik.errors.password}</div> : null}
		</div>
		<div className={s.checkbox}>
			<label htmlFor="rememberMe">Remember Me</label>
			<input
				name="rememberMe"
				type="checkbox"
				onChange={formik.handleChange}
				value={formik.values.rememberMe}
			/>
		</div>
		{
			props.captchaUrl ? <div classname={s.captcha} >
				<img classname={s.captchaPic} src={props.captchaUrl} alt="" />
				<div className={s.field}>
					<input
						className={s.input}
						name='captcha'
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.captcha}
					/></div>
			</div>
				: null
		}
		{formik.touched.captcha && formik.errors.captcha && props.captchaUrl ? <div className={s.error}>{formik.errors.captcha}</div> : null}
		<button className={s.btn} type="submit" >Submit</button>
	</form >
};