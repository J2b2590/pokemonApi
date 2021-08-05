import {useParams} from 'react-router-dom'
const PokemonView = (props) => {
    const { id } = useParams()
//   console.log(JSON.parse(props.location.state.poke))
//   const pokeId = props.poke_mon.url.split("/")[6];
//   console.log(pokeId)
const poke = JSON.parse(props.location.state.poke)
console.log(poke.Pokemon,"pOKE")
const name = props.location.state.poke
console.log(name)
// const keys = Object.keys(props.location.state.poke)
// keys.map((key)=>{
//    console.log(props.location.state.poke[key]) 
    
// })

    return(
        
        <div>
            <h1>{poke.Pokemon}</h1>
            <h1>poke id - {id} </h1>
        </div>
    )
}

export default PokemonView;