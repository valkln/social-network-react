import React from "react"
import s from './FormControls.module.css'

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
	const hasError = touched && error;
	return (<div>
		<div className={hasError ? s.error : undefined}>
			<textarea defaultValue={props.defaultValue} {...props} />
		</div>
		{hasError && <div className={s.error}><span>{error}</span></div>}
	</div>
	)
}

export const Input = ({ input, meta: { touched, error }, ...props }) => {
	const hasError = touched && error;
	return (<div>
		<div className={hasError ? s.error : undefined}>
			<input {...props} />
		</div>
		{hasError && <div className={s.error}><span>{error}</span></div>}
	</div>
	)
}