import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../../redux/profile-reducer";
type TProps = {
	status: string
}
const ProfileStatus: React.FC<TProps> = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	useEffect(() => {
		setStatus(props.status)
	}, [props.status]);

	const dispatch = useDispatch()
	const sendStatus = (status: string) => {
		dispatch(updateStatus(status))
	}

	const activateEditMode = () => {
		setEditMode(true)
	};
	const deactivateEditMode = () => {
		setEditMode(false)
		sendStatus(status)
	};
	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value)
	};
	return (
		<div>
			{editMode ?
				<div>
					<input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} type="text" value={status} />
				</div>
				:
				<div>
					<span onDoubleClick={activateEditMode}  >{props.status || 'no status'}</span>
				</div>
			}
		</div>
	);
}
export default ProfileStatus;