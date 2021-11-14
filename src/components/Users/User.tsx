import React from 'react';
import { NavLink } from 'react-router-dom';
import defUserPic from '../../img/ava.png';
import { UserType } from '../../types/types';
import { Avatar, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
type Tprops = {
	user: UserType,
	followingInProgress: Number[],
	follow: (id: number, followed: boolean) => void,
	unfollow: (id: number, followed: boolean) => void
}
const User: React.FC<Tprops> = ({ user, followingInProgress, follow, unfollow }) => {
	return <Card sx={{ m: 1 }}>
		<CardContent>
			<NavLink to={'/profile/' + user.id}> <Avatar sx={{ width: 'auto', height: 'auto' }} src={user.photos.large !== null ? user.photos.large : defUserPic} alt='userpic' />  </NavLink>
			<Typography variant='h5' component='div' >{user.name}</Typography>
			<Typography variant='subtitle1' component='div' >{user.status}</Typography>
		</CardContent>
		<CardActions>
			{user.followed ?
				<Button
					disabled={followingInProgress.some(id => id === user.id)}
					onClick={() => unfollow(user.id, user.followed)}>Unfollow</Button>
				:
				<Button
					disabled={followingInProgress.some(id => id === user.id)}
					onClick={() => follow(user.id, user.followed)}>Follow</Button>
			}
		</CardActions>
	</Card>
}
export default User;