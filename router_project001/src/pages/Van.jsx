import { clsx } from 'clsx'

export default function Van(props){
    const vanButton = clsx('van-type', props.type)
    return (
        <div className="van-card">
            <img src={props.image} alt="" />
            <div className="van-info">
                <h3>{props.name}</h3>
                <div class="van-price">
                    <span class="price">{`$${props.price}`}</span>
                    <span class="per-day">/day</span>
                </div>
            </div>
            <button className={vanButton}>{props.type}</button>
        </div>
    )
}