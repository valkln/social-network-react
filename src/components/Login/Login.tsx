import React from 'react';
import { login } from '../../redux/auth-reducer'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuthError, getCaptchaUrl, getIsAuth } from '../../redux/auth-selectors';
import { Button, Checkbox, Container, CssBaseline, FormControlLabel, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

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
	const authError = useSelector(getAuthError)
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
			email: Yup.string()
				.email('Invalid email address')
				.required('Required')
		}),
		onSubmit: (values) => {
			submit(values)
		},
	});
	if (isAuth) {
		return <Redirect to={'/profile'} />
	} else return <>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
					<TextField
						error={Boolean(formik.touched.email && formik.errors.email)}
						name="email"
						type="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						margin="normal"
						fullWidth
						id="email"
						label="Email Address"
						autoFocus
					/>
					{formik.touched.email && formik.errors.email ? <Typography component='div' sx={{ color: 'red' }} >{formik.errors.email}</Typography> : null}
					<TextField
						error={Boolean(formik.touched.password && formik.errors.password)}
						name="password"
						type="password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						margin="normal"
						fullWidth
						label="Password"
						id="password"
					/>
					{formik.touched.password && formik.errors.password ? <Typography component='div' sx={{ color: 'red' }} >{formik.errors.password}</Typography> : null}
					{captchaUrl ? <Box>
						<Typography >Please enter captcha</Typography>
						<img src={captchaUrl} alt="" />
						<TextField
							name='captcha'
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.captcha}
							margin="normal"
							label="captcha"
							id="captcha"
							fullWidth
						/>
					</Box>
						: null}
					<FormControlLabel
						control={<Checkbox
							name="rememberMe"
							onChange={formik.handleChange}
							checked={formik.values.rememberMe}
							color='primary'
						/>}
						label='Remember Me' />
					{authError ?
						<Paper sx={{ border: 'solid red' }}><Typography component='div' sx={{ color: 'red', fontSize: 18, p: 1 }} >Invalid email or password</Typography></Paper>
						: null
					}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>Sign In</Button>
				</Box>
			</Box>
		</Container>
	</>
};

export default Login;
/**/