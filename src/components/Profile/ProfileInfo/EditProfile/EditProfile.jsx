import React from "react"
import s from './EditProfile.module.css'
import { useFormik } from "formik";
import * as Yup from 'yup';
const EditProfile = ({ profile, updateProfile, setEditMode }) => {
	const formik = useFormik({
		initialValues: {
			fullName: profile.fullName,
			lookingForAJob: profile.lookingForAJob,
			lookingForAJobDescription: profile.lookingForAJobDescription,
			aboutMe: profile.aboutMe,
			contacts: {
				github: profile.contacts.github,
				vk: profile.vk,
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
		onSubmit: (values) => {
			updateProfile(values)
				.then(setEditMode(false))
		},
	});
	return <form
		onSubmit={formik.handleSubmit}
		className={s.form}>
		<div className={s.col}>
			<div className={s.field}>
				<label className={s.label} htmlFor="fullName">Full name</label>
				<input
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
				<input
					name="lookingForAJob"
					type="checkbox"
					onChange={formik.handleChange}
					value={formik.values.lookingForAJob}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="lookingForAJobDescription">Skills</label>
				<textarea
					name="lookingForAJobDescription"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.lookingForAJobDescription}
				/>
				{formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription ? <div className={s.error}>{formik.errors.lookingForAJobDescription}</div> : null}
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="aboutMe">About Me</label>
				<textarea
					name="aboutMe"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.aboutMe}
				/>
				{formik.touched.aboutMe && formik.errors.aboutMe ? <div className={s.error}>{formik.errors.aboutMe}</div> : null}
			</div>
			<button className={s.btn} type="submit" >Submit</button>
		</div>
		<div className={s.col}>
			<h6>Contacts:</h6>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.github">github</label>
				<input
					name="contacts.github"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.github}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.vk">vk</label>
				<input
					name="contacts.vk"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.vk}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.facebook">facebook</label>
				<input
					name="contacts.facebook"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.facebook}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.instagram">instagram</label>
				<input
					name="contacts.instagram"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.contacts.instagram}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.twitter">twitter</label>
				<input
					name="contacts.twitter"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.twitter}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.website">website</label>
				<input
					name="contacts.website"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.website}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.youtube">youtube</label>
				<input
					name="contacts.youtube"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.youtube}
				/>
			</div>
			<div className={s.field}>
				<label className={s.label} htmlFor="contacts.mainLink">mainLink</label>
				<input
					name="contacts.mainLink"
					type="text"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.mainLink}
				/>
			</div>
		</div>

	</form >
};
export default EditProfile;