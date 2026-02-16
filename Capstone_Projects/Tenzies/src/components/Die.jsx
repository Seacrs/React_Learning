export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld && '#59E391'
    }
    return (
        <button style={styles} className="dice-button">{props.value}</button>
    )
}