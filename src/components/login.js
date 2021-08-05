import { useForm } from 'react-hook-form'


const Login = (props) => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (e) => {
        // alert(JSON.stringify(e))
        props.history.push("/pokemon")
        props.grabLoginUsers(e)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <lable>
                    First Name:
                    <input {...register("firstName")}  />
                </lable>
                <lable>
                    Last Name:
                    <input {...register("lastName")} />
                </lable>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}


export default Login;