import { useForm } from 'react-hook-form'
import { User } from '../Js/User.js'
import { useNavigate } from 'react-router-dom'
import { useAuthProviderContext } from '../Context/AuthContext'

function Login() {
  const user = new User()
  const navigator = useNavigate()
  const { setIsAuthenticated} = useAuthProviderContext()
  const { register, handleSubmit } = useForm()


  const handleSubtmitSignin = handleSubmit(async (values) => {
    await user.Signin(setIsAuthenticated,values,navigator)
  });

  return (
    <form onSubmit={handleSubtmitSignin} className="login">
      <img src="img/fondo.jpg" alt="image" className="login__bg" />
      <h3 className='login__firma'>Oscar Lonardo</h3>
      <div className="login__form">
        <h1 className="login__title">Inicio</h1>

        <div className="login__inputs">
          <div className="login__box">

            <input type="email" {...register("user", { required: true })} placeholder="Correo" className="login__input" />


          </div>

          <div className="login__box">
            <input type="password" {...register("password", { required: true })} placeholder="Contraseña" className="login__input" />

          </div>
        </div>

        <div className="login__check">
          <div className="login__check-box">
            <input type="checkbox" className="login__check-input" id="user-check" />
            <label htmlFor="user-check" className="login__check-label">Recordarme</label>
          </div>
          <a href="#" className="login__forgot">¿Has olvidado tu contraseña?</a>
        </div>
        <button type="submit" className="login__button">Iniciar</button>
      </div>
    </form>
  )
}

export default Login