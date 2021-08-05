import "../App.css"



const Header = (props) => {
    console.log(props)
    const firstName = props.personLog.firstName
    
    return(
        <div className="header">
            <h1>welcome to pokedex creator</h1>
            <p>create your own pokedex</p>
            
            {
                firstName  ? <p>Welcome : {firstName} </p> : null
            }
            
        </div>
    )
}

export default Header;