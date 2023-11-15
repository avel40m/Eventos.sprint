import { Link } from "react-router-dom"

export const Register = ({setValue}) => {
    return (
        <div className='form-login'>
            <form>
                <div className="form-login-inputs">
                    <input type="text" placeholder='Usuario' />
                    <input type="email" placeholder='Correo Electronico' />
                    <input type="password" placeholder='Contraseña' />
                    <input type="password" placeholder='Confirmar contraseña' />
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