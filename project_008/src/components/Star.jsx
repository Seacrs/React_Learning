import starFilled from "../../img/star-filled.jpg"
import starEmpty from "../../img/star-empty.jpg"

export default function Star(props){

    let starIcon = props.isFilled ? starFilled : starEmpty

    return (
        <button
            onClick = {props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button">
            <img
            src={starIcon}
            alt={props.isFilled ? "filled star icon" : "empty star icon"}
            className="favorite"/>
        </button>
        
    )
}