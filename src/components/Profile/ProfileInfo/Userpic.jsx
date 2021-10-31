import React from "react";
import s from './ProfileInfo.module.css'
import defUserPic from '../../../img/ava.png'

const Userpic = (props) => {
	const onPhotoSelect = (e) => {
		if (e.target.files.length) {
			props.changePhoto(e.target.files[0])
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