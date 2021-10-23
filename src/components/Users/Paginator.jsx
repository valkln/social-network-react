import s from './Users.module.css'
import React from 'react';
const Paginator = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <div>
		{pages.map(p => {
			return <span key={p} onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? s.selected : undefined}>{p}</span>
		})}
	</div>
}

export default Paginator;