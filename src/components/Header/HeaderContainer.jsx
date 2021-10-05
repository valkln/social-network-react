import React from "react"
import { connect } from "react-redux";
import { getAuth } from "../../redux/auth-reducer";
import Header from "./Header";
class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuth()
	}
	render() {
		return <Header {...this.props} />
	}
}

const msp = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});
export default connect(msp, { getAuth })(HeaderContainer);