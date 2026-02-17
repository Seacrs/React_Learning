export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld && '#59E391'
    }

    return (
        <button 
            style={styles} 
            ref={props.ref}
            onClick={props.hold} 
            aria-pressed={props.isHeld} 
            className="dice-button"
            aria-label={`Die with value ${props.isHeld ? 'Held' : 'Not Held'}`}
            >{props.value}</button>
    )
}