import trash from '../assets/delete.png'

export default function Task(props){
    return (
        <>
        <div className="task-container">
            <label className='checkbox'>
                <input type="checkbox" checked={props.on} onChange={()=>props.toggle(props.id)}/>
                <span className={props.on ? "strike" : ""}> {props.name}</span>
            </label>

            <button onClick={()=> props.remove(props.id)}>
                <img src={trash} alt="" width='33px'/>
            </button>
        </div>
        </>
    )
}