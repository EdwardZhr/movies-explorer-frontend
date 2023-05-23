import Form from '../Form/Form';
import { Link } from 'react-router-dom';

function Login (){
    const fields = [
      { name: 'email', text: 'E-mail'},
      { name: 'password', text: 'Пароль'}
    ]

    const formConfig = {
      email: {
        required: 'Необходимо указать почту \n',
        pattern: {
          value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/,
          message: 'Необходимо указать почту \n'
        },
        minLength: {
          value: 3,
          message: 'В поле "E-mail" должно быть больше 3 символов \n'
        }
      },
      password: {
        required: 'Необходимо указать пароль \n',
        minLength: {
          value: 4,
          message: 'В поле "Пароль" должно быть больше 4 символов \n'
        }
      }
      }

    return (
      <Form title='Рады видеть!'  btnText='Войти' fields={fields} formConfig={formConfig}>
        <p className='form__text'>Еще не зарегистрированы? <Link to="/signup" className="form__link">Регистрация</Link></p>
      </Form>      
      )
  }

export default Login