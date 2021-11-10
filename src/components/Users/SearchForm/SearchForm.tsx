import React from "react";
import { useFormik } from "formik";
import { FilterType } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { getFilter, getPageSize } from "../../../redux/users-selectors";
import { getUsers } from "../../../redux/users-reducer";
import { Button, MenuItem, Select, TextField } from "@mui/material";
type TFriend = 'true' | 'null'
const SearchForm: React.FC = () => {
	const pageSize = useSelector(getPageSize)
	const dispatch = useDispatch()
	const filter = useSelector(getFilter)
	const onFilterChanged = (filter: FilterType) => {
		dispatch(getUsers(1, pageSize, filter));
	}
	const formik = useFormik({
		initialValues: {
			name: filter.name,
			friend: String(filter.friend) as TFriend
		},
		enableReinitialize: true,
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
			<TextField
				sx={{ m: 1, minWidth: 120 }}
				name="name"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.name}
				placeholder='enter username'
			/>
			<Select sx={{ m: 1, minWidth: 120 }} onChange={formik.handleChange} value={formik.values.friend} name="friend">
				<MenuItem value="null">all</MenuItem>
				<MenuItem value="true">only followed</MenuItem>
			</Select>
			<Button variant="contained" color="primary" type="submit">find</Button>
		</form>
	);
}
export default SearchForm