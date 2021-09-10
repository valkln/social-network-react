import s from './Message.module.css';
export default function Message(props) {
	return <div className={s.message}>{props.message}</div>
}
