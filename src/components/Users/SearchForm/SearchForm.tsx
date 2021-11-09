import React from "react";
import s from './SearchForm.module.css';
import { useFormik } from "formik";
import { FilterType } from "../../../types/types";
type Tprops = {
	onFilterChanged: (filter: FilterType) => void
}
const SearchForm: React.FC<Tprops> = (props) => {
	const formik = useFormik({
		initialValues: {
			name: '',
			friend: 'null' as string
		},
		onSubmit: async values => {
			const filter: FilterType = {
				name: values.name,
				friend: values.friend === 'null' ? null : values.friend === 'true' ? true : null
			}
			props.onFilterChanged(filter)
		},
	});
	return (
		<form
			onSubmit={formik.handleSubmit}>
			<input
				className={s.searchform}
				name="name"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.name}
				placeholder='enter username'
			/>
			<select className={s.searchform} onChange={formik.handleChange} value={formik.values.friend} name="friend">
				<option value="null">all</option>
				<option value="true">only followed</option>
			</select>
			<button className={s.submit} type="submit">find</button>
		</form>
	);
}
export default SearchForm