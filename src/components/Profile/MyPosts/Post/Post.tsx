import defUserPic from '../../../../img/ava.png'
import { Avatar, Card, CardActions, CardContent, Typography } from '@mui/material';
type Tprops = {
	userpic: string | null
	message: string
	likesCount: number
}
const Post: React.FC<Tprops> = (props) => {
	return (
		<Card sx={{ my: 1 }} >
			<CardContent sx={{ display: 'flex' }}>
				<Avatar sx={{ width: 100, height: 100, mr: 5 }} src={props.userpic !== null ? props.userpic : defUserPic} alt='userpic'></Avatar>
				<Typography variant="body1" component="p" >{props.message}</Typography>
			</CardContent>
			<CardActions >
				<span >like {props.likesCount}</span>
				<span >repost</span>
			</CardActions>
		</Card>
	);
}

export default Post;