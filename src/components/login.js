import { useForm } from 'react-hook-form'
import "../App.css"


const Login = (props) => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (e) => {
        // alert(JSON.stringify(e))
        props.history.push("/pokemon")
        props.grabLoginUsers(e)
    }
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}  >
                <label>
                    First Name:
                    <input {...register("firstName")}  />
                </label>
                <label>
                    Last Name:
                    <input {...register("lastName")} />
                </label>
                
                <label>
                <input type="submit" value="submit"/>
                </label>   
            </form>
        </div>
    )
}


export default Login;