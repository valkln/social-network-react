import { List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
const Navbar = () => {
	return (
		<Box sx={{ gridArea: 'n' }}>
			<List>
				<NavLink className={s.link} activeClassName={s.active} to='/profile'><ListItem button>Profile</ListItem></NavLink>
				<NavLink className={s.link} activeClassName={s.active} to='/messages'><ListItem button>Messages</ListItem></NavLink>
				<NavLink className={s.link} activeClassName={s.active} to='/users'><ListItem button>Find Users</ListItem></NavLink>
			</List>
		</Box>
	);
}

export default Navbar;