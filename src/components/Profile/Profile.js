import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Field from '../Field/Field';
import './Profile.css'


function Profile({userInfo, setUserInfo}) {
  const navigate = useNavigate();
  const [isEdited, setIsEdited] = useState(false);
  const { handleSubmit, formState: {errors}, control, watch} = useForm({
    defaultValues: {
        email: userInfo.email,
        name: userInfo.name
    }
  });

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
	name: {
		required: 'Необходимо указать имя \n',
		minLength: {
			value: 2,
			message: 'В поле "Имя" должно быть больше 2 символов \n'
		}
	}
  }

  const data = watch();

  const onSubmit = (e) => {
      if (!isEdited) {
        return setIsEdited(true);
      }
      setIsEdited(false)
	  setUserInfo({name: data.name, email: data.email})
    }

    const signOut = (e) => {
      navigate('/', { replace: true })
    }

  return (
	<div className={`profile ${isEdited && 'profile_edited'}`}>
		<form className='profile__form' onSubmit={handleSubmit(onSubmit)}>
			<h3 className='profile__title'>{`Привет, ${userInfo.name}!`}</h3>
			<fieldset className='profile__set'>
				<Field name='name' rules={formConfig.name} control={control} text='Имя' isEdited={isEdited}/>
				<Field name='email' rules={formConfig.email} control={control} text='E-mail' isEdited={isEdited}/>
				{isEdited && <span className='profile__error'>{errors.name && `${errors.name.message}`} {errors.email && `${errors.email.message}`}</span>}
				<button disabled={isEdited && (errors.name || errors.email)}  className={`profile__btn ${isEdited && (errors.name || errors.email) &&  'profile__btn_disabled'}`}>{isEdited ? 'Сохранить' : 'Редактировать'}</button>
				<button className='profile__btn profile__btn_exit' onClick={signOut}>Выйти из аккаунта</button>
			</fieldset>
		</form>
	</div>
  );
} 
  
export default Profile