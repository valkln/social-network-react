import React from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router"

let msp = (state) => ({ isAuth: state.auth.isAuth });
const AuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuth) return <Redirect to={'/login'} />;
			return <Component {...this.props} />;
		}
	}
	let ConnectedAuthRedirect = connect(msp)(RedirectComponent)
	return ConnectedAuthRedirect;
}

export default AuthRedirect;