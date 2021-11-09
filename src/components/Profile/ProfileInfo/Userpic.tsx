import React, { ChangeEvent } from "react";
import s from './ProfileInfo.module.css'
import defUserPic from '../../../img/ava.png'
import { useDispatch } from "react-redux";
import { changePhoto } from "../../../redux/profile-reducer";
type TProps = {
	userpic: string | null
	isOwner: boolean
}
const Userpic: React.FC<TProps> = (props) => {
	const dispatch = useDispatch()
	const updatePhoto = (photo: File) => {
		dispatch(changePhoto(photo))
	}
	const onPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length) {
			updatePhoto(e.target.files[0])
		}
	}
	return <div className={s.userpic}>
		<img src={props.userpic ? props.userpic : defUserPic} alt='userpic'></img>
		{props.isOwner ?
			<> <input onChange={onPhotoSelect} id={"input__file"} type={"file"} />
				<label htmlFor={"input__file"}>Change userpic</label> </>
			: null}
	</div>
}
export default Userpic