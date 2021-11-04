import s from './Paginator.module.css'
import React, { useState } from 'react';

type PropsType = { portionSize?: number, totalUsersCount: number, pageSize: number, currentPage: number, onPageChanged: (pageNumber: number) => void }
const Paginator: React.FC<PropsType> = ({ portionSize = 10, totalUsersCount, pageSize, onPageChanged, currentPage }) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
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
					onClick={() => onPageChanged(p)}
					className={`${currentPage === p ? s.selected : undefined} ${s.pagenumber}`}>{p}</span>
			})}
		{portionNumber < portionCount && <button className={s.pagibutton} onClick={() => { setPortionNumber(portionNumber + 1) }} >next</button>}
	</div>
}

export default Paginator;