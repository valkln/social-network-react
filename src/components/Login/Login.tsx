import React from 'react';
import s from './Login.module.css'
import { login } from '../../redux/auth-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getCaptchaUrl, getIsAuth } from '../../redux/auth-selectors';

type Tvalues = {
	email: string,
	password: string,
	rememberMe: boolean,
	captcha: string
}
const Login: React.FC = () => {
	const dispatch = useDispatch()
	const submit = (values: Tvalues) => {
		dispatch(login(values.email, values.password, values.rememberMe, values.captcha))
	}
	const captchaUrl = useSelector(getCaptchaUrl)
	const isAuth = useSelector(getIsAuth)
	const formik = useFormik({
		initialValues: {
			email: '' as string,
			password: '' as string,
			rememberMe: false,
			captcha: '' as string
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.required('Required'),
			email: Yup.string().email('Invalid email address').required('Required')
		}),
		onSubmit: (values) => {
			submit(values)
		},
	});
	if (isAuth) {
		return <Redirect to={'/profile'} />
	} else return <>
		<h1 className={s.header}>Login</h1>
		<form
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
					checked={formik.values.rememberMe}
				/>
			</div>
			{captchaUrl ? <div className={s.captcha} >
				<div>Please enter captcha</div>
				<img className={s.captchaPic} src={captchaUrl} alt="" />
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
				: null}
			{formik.touched.captcha && formik.errors.captcha && captchaUrl ? <div className={s.error}>{formik.errors.captcha}</div> : null}
			<button className={s.btn} type="submit" >Submit</button>
		</form >
	</>
};

export default Login;