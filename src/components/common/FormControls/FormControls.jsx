import React from "react"
import s from './FormControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (<div>
		<div className={hasError ? s.error : undefined}>
			<textarea  {...input} {...props} />
		</div>
		{hasError && <div className={s.error}><span>{meta.error}</span></div>}
	</div>
	)
}

export const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (<div>
		<div className={hasError && s.error}>
			<input {...input} {...props} />
		</div>
		{hasError && <div className={s.error}><span>{meta.error}</span></div>}
	</div>
	)
}