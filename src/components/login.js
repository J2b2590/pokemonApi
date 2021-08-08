import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';

import "../App.css"


const Login = (props) => {
    const {register, formState: { errors }, handleSubmit} = useForm()
    const onSubmit = (e) => {
        props.history.push("/pokemon")
        props.grabLoginUsers(e)
    }
    console.log({errors})
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}  >
                <label>
                    Your Trainer Name:
                    <input {...register("firstName", { required: "Trainer Name is Required" })}  />
                </label>
                <label>
                <input type="submit" value="submit"/>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="firstName"
                    render={({ message }) => <p style={{color: "red", textAlign: "center"}} >{message}</p>}
                />   
            </form>
            
        </div>
    )
}


export default Login;