import style from "./todoitem.css"

function Todoitem (props) {
    let {id, done,label} = props

    console.log(props)
    return (
        <li>
            <label> {label} </label>
            <input 
                checked={done}
                onChange={ () => { props.toggleTaskCompleted(id)}}
                type="checkbox"
            />
        </li>
    )
}

export default Todoitem