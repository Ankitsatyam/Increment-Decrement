import './Name.css'

function Name(props) {
    let Name = props.name;
    return (
        <div className='main'>{Name}</div>
    )
}
export default Name;