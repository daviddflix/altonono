import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { detail } from "../../redux/actions";
import Spinner from "../spinner/spinner";
import s from './detail.module.css'
import CurrencyFormat from 'react-currency-format'
import {RiArrowLeftSLine} from 'react-icons/ri'

export default function Detail (){

    const dispatch = useDispatch();
    const {id} = useParams();
    const data = useSelector(state => state.detail);
    const history = useHistory();
    
    useEffect(() => {
        dispatch(detail(id))
    }, [dispatch, id])

    const goback = () => {
      history.goBack()
    }

    return(
        <div className={s.main}>
            {
                data.items ? <div className={s.submain}>
                     <div className={s.containerArrow}>
                        <RiArrowLeftSLine onClick={goback} className={s.arrowleft}/>
                        <h3 className={s.maintitle}>Detalle del pedido</h3>
                     </div>
                    <div className={s.box1}>
                       {
                        data.items && data.items.map(p => {
                            return(
                               <div key={id} className={s.subbox1}>
                                    <div className={s.subbox_}>
                                        <h4 className={s.quantity}>x{p.quantity}</h4>
                                        <h4>{p.title}</h4>
                                    </div>
                                    <CurrencyFormat value={p.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                               </div>
                            )
                        })
                       }
                    </div>
                    <div className={s.containerResumen}><h3>Resumen</h3></div>
                    <div className={s.box2}>
                        <div className={s.subbox2}>
                            <h4 className={s.subbox2_title}>Forma de pago</h4>
                            <h4 className={s.method}>{data.method}</h4>
                        </div>
                        <div className={s.subbox2}>
                            <h4 className={s.subbox2_title}>Total</h4>
                            <CurrencyFormat value={data.monto} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </div>
                    </div>
                    <div className={s.containerResumen}><h3>Mi orden</h3></div>
                    <div className={s.box2}>
                        <div className={s.subbox2}>
                            <h4 className={s.status}>{data.status}</h4>
                        </div>
                    </div>
                </div> :
                <div className={s.containerSpinner}><Spinner/></div>
            }
        </div>
    )
}