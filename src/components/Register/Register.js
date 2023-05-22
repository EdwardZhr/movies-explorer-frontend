import Form from '../Form/Form';
import { Link } from 'react-router-dom';

function Register () {
    const fields = [
        { name: 'name', text: 'Имя'},
        { name: 'email', text: 'E-mail'},
        { name: 'password', text: 'Пароль'}
    ]

    const formConfig = {
      email: {
        required: 'Необходимо указать почту',
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
        required: 'Необходимо указать пароль',
        minLength: {
          value: 4,
          message: 'В поле "Пароль" должно быть больше 4 символов \n'
        }
      },
      name: {
        required: 'Необходимо указать имя',
        minLength: {
          value: 2,
          message: 'В поле "Имя" должно быть больше 2 символов \n'
        }
      }
      }

    return (
      <Form title='Добро пожаловать!'  btnText='Зарегистрироваться' fields={fields} formConfig={formConfig}>
        <p className='form__text'>Уже зарегистрированы? <Link to="/signin" className="form__link">Войти</Link></p>
      </Form>      
      )
  }

export default Register