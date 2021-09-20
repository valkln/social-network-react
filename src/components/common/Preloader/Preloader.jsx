import s from './Preloader.module.css'
import loader from '../../../img/loader.svg'
export default function Preloader(props) {
	return <div className={s.loader} > <img src={loader} alt="loader" /> </div>
}