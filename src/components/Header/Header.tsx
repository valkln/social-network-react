import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { logout } from "../../redux/auth-reducer";
import { useDispatch, useSelector } from 'react-redux'
import { getIsAuth, getMyLogin } from '../../redux/auth-selectors';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Header: React.FC = () => {
	const login = useSelector(getMyLogin)
	const isAuth = useSelector(getIsAuth)
	const dispatch = useDispatch()
	const history = useHistory()
	const onLogout = async () => {
		await dispatch(logout())
		history.push({
			pathname: '/login'
		})
	}
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" >
				<Toolbar>
					<Typography variant='h4' component='div'>Network</Typography>
					<Box sx={{ flexGrow: 1 }} />
					{isAuth ?
						<Typography variant='h4' component='div'>{login} <Button variant='contained' onClick={onLogout} >log out</Button> </Typography>
						: <NavLink to={'/login'}><Button variant='contained' color='primary' >Log In</Button></NavLink>
					}
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default (Header);