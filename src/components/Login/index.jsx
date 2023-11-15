import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userActions from '../../store/actions/userActions';
import { loginRequest } from '../../utils/customer';
import './style.css';

export const Login = ({setValue}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register,handleSubmit,formState:{errors}} = useForm();
    const onSubmit = async (data) => {
        const resp = await loginRequest(data);
        if (resp.token) {
            dispatch(userActions.login(resp))
            navigate('/');
        } else {
            let { error } = resp.response.data;
            toast.error(error)
        }
    }
    return (
        <div className='form-login'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-login-inputs">
                    <input type="text" placeholder='Usuario' {...register('username',{required:"El campo es requerido"})} />
                    {errors && <small className='text-red'>{errors.username?.message}</small>}
                    <input type="password" placeholder='Contraseña' {...register('password',{required:"La contraseña es requerida"})} />
                    {errors && <small className='text-red'>{errors.password?.message}</small>}
                    <input type="submit" value='Iniciar sesion' />
                </div>
                <div className="form-login-message">
                    <p>¿No tiene una cuenta?</p>
                    <Link onClick={() => setValue(false)}>Registrarme</Link>
                </div>
            </form>
        </div>
    )
}
