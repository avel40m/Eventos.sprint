import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { registerRequest } from "../../utils/customer";
import toast from "react-hot-toast";

export const Register = ({setValue}) => {
    const { register,handleSubmit } = useForm();
    const handleEnviar = async (datos) => {
        const resp = await registerRequest({...datos,rol:"USER"});
        const {status} = resp.response;

        if (status === 500) {
            toast.error(resp.response.data.error);
        } else {
            toast.success("Se registro correctamente!!!");
        }
    }
    return (
        <div className='form-login'>
            <form onSubmit={handleSubmit(handleEnviar)}>
                <div className="form-login-inputs">
                    <input type="text" placeholder='Usuario'
                    {...register("username")}
                    />
                    <input type="email" placeholder='Correo Electronico'
                    {...register("email")}
                     />
                    <input type="password" placeholder='Contraseña' 
                    {...register("password")}/>
                    <input type="password" placeholder='Confirmar contraseña' 
                    {...register("confirmPassword")}
                    />
                    <input type="submit" value='Registrarme' />
                </div>
                <div className="form-login-message">
                    <p>¿Tienes una cuenta?</p>
                    <Link onClick={() => setValue(true)}>Iniciar sesion</Link>
                </div>
            </form>
        </div>
    )
}