import React, { useEffect, useState } from "react";


const ProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	useEffect(() => {
		setStatus(props.status)
	}, [props.status]);
	const activateEditMode = () => {
		setEditMode(true)
	};
	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	};
	const onStatusChange = (e) => {
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