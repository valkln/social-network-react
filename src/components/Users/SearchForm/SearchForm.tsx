import React from "react";
import s from './SearchForm.module.css';
import { useFormik } from "formik";
import { FilterType } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { getPageSize } from "../../../redux/users-selectors";
import { getUsers } from "../../../redux/users-reducer";

const SearchForm: React.FC = () => {
	const pageSize = useSelector(getPageSize)
	const dispatch = useDispatch()
	const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsers(1, pageSize, filter));
	}

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
			onFilterChanged(filter)
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