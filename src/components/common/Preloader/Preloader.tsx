import s from './Preloader.module.css'
import loader from '../../../img/loader.svg'

const Preloader = () => {
	return <div className={s.loader} > <img src={loader} alt="loader" /> </div>
}
export default Preloader