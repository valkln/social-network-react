import s from './Paginator.module.css'
import React, { useState } from 'react';
const Paginator = ({ portionSize = 10, ...props }) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;
	return <div className={s.paginator}>
		{portionNumber > 1 && <button className={s.pagibutton} onClick={() => { setPortionNumber(portionNumber - 1) }} >prev</button>}
		{pages
			.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
			.map((p) => {
				return <span
					key={p}
					onClick={() => props.onPageChanged(p)}
					className={`${props.currentPage === p ? s.selected : undefined} ${s.pagenumber}`}>{p}</span>
			})}
		{portionNumber < portionCount && <button className={s.pagibutton} onClick={() => { setPortionNumber(portionNumber + 1) }} >next</button>}
	</div>
}

export default Paginator;