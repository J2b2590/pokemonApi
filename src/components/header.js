import "../App.css"



const Header = (props) => {
    console.log(props)
    const firstName = props.personLog.firstName
    const lastName = props.personLog.lastName
    return(
        <div className="header">
            <h1>welcome to pokedex creator</h1>
            <p>create your own pokedex</p>
            {
                firstName && lastName ? <p>Welcome : {firstName} {lastName}</p> : null
            }
            
        </div>
    )
}

export default Header;