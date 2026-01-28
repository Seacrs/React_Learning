export default function Joke(props){
    return (
        <article>
            <div>
                <p>{props.setup}</p>
                <p>{props.punchLine}</p>
                <hr />
            </div>
        </article>
    )
}