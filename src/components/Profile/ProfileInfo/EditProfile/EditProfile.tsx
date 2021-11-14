import React from "react"
import s from './EditProfile.module.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ProfileType } from "../../../../types/types";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../../redux/profile-reducer";
import { Button, Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
type Tprops = {
	setEditMode: (data: boolean) => void
	profile: ProfileType
}

const EditProfile: React.FC<Tprops> = ({ profile, setEditMode }) => {
	const dispatch = useDispatch()
	const submit = (values: ProfileType) => {
		dispatch(updateProfile(values))
	}
	const formik = useFormik({
		initialValues: {
			userId: profile.userId,
			photos: profile.photos,
			fullName: profile.fullName,
			lookingForAJob: profile.lookingForAJob,
			lookingForAJobDescription: profile.lookingForAJobDescription,
			aboutMe: profile.aboutMe,
			contacts: {
				github: profile.contacts.github,
				vk: profile.contacts.vk,
				facebook: profile.contacts.facebook,
				instagram: profile.contacts.instagram,
				twitter: profile.contacts.twitter,
				website: profile.contacts.website,
				youtube: profile.contacts.youtube,
				mainLink: profile.contacts.mainLink,
			}
		},
		validationSchema: Yup.object({
			fullName: Yup.string()
				.required('Required')
		}),
		onSubmit: async (values) => {
			await submit(values)
			setEditMode(false);
		},
	});
	return <Box
		component='form'
		sx={{ display: 'flex' }}
		onSubmit={formik.handleSubmit}
		className={s.form}>
		<div className={s.col}>
			<div className={s.field}>
				<TextField
					label='Full name'
					name="fullName"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.fullName}
				/>
				{formik.touched.fullName && formik.errors.fullName ? <div className={s.error}>{formik.errors.fullName}</div> : null}
			</div>
			<div className={s.checkbox}>
				<label htmlFor="lookingForAJob">Looking for a job</label>
				<Checkbox
					name="lookingForAJob"
					onChange={formik.handleChange}
					defaultChecked={profile.lookingForAJob}
					value={formik.values.lookingForAJob}
				/>
			</div>
			<div className={s.field}>
				<TextField
					label='skills'
					multiline
					fullWidth
					rows={5}
					name="lookingForAJobDescription"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lookingForAJobDescription}
				/>
				{formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription ? <div className={s.error}>{formik.errors.lookingForAJobDescription}</div> : null}
			</div>
			<div className={s.field}>
				<TextField
					label='About Me'
					multiline
					fullWidth
					rows={5}
					name="aboutMe"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.aboutMe}
				/>
				{formik.touched.aboutMe && formik.errors.aboutMe ? <div className={s.error}>{formik.errors.aboutMe}</div> : null}
			</div>
			<Button variant='contained' color='secondary' type="submit" >Submit</Button>
		</div>
		<div className={s.col}>
			<h6>Contacts:</h6>
			<div className={s.field}>
				<TextField
					label='github'
					name="contacts.github"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.github}
				/>
			</div>
			<div className={s.field}>
				<TextField
					label='vk'
					name="contacts.vk"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.vk}
				/>
			</div>
			<div className={s.field}>
				<TextField
					label='facebook'
					name="contacts.facebook"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.facebook}
				/>
			</div>
			<div className={s.field} >
				<TextField
					label='instagram'
					name="contacts.instagram"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.instagram}
				/>
			</div>
			<div className={s.field}>
				<TextField
					label='twitter'
					name="contacts.twitter"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.twitter}
				/>
			</div>
			<div className={s.field}>
				<TextField
					label='website'
					name="contacts.website"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.website}
				/>
			</div>
			<div className={s.field}>
				<TextField
					label='youtube'
					name="contacts.youtube"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.youtube}
				/>
			</div>
			<div className={s.field}>
				<TextField
					label='mainLink'
					name="contacts.mainLink"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.mainLink}
				/>
			</div>
		</div>
	</Box >
};
export default EditProfile;