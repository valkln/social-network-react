import { AppStateType } from '../redux/redux-store';
import React from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
type Tprops = {
	isAuth: boolean
}
let msp = (state: AppStateType) => ({ isAuth: state.auth.isAuth } as Tprops);

function AuthRedirect<ComponentProps>(Component: React.ComponentType<ComponentProps>) {
	const RedirectComponent: React.FC<Tprops> = (props) => {
		let { isAuth, ...restProps } = props
		if (!isAuth) return <Redirect to='/login' />
		return <Component {...restProps as ComponentProps} />
	}
	let ConnectedAuthRedirect = connect(msp)(RedirectComponent) as React.ComponentType
	return ConnectedAuthRedirect;
}

export default AuthRedirect;