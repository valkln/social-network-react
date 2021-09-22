import axios from "axios";
import React from "react"
import { connect } from "react-redux";
import { setAuthData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data;
					this.props.setAuthData(id, email, login);
				}
			})
	}
	render() {
		return <Header {...this.props} />
	}
}

const msp = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});
export default connect(msp, { setAuthData })(HeaderContainer);