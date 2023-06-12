import {useState, useContext} from 'react';
import CurrentUserContext from '../../contexts/CurrentUserCintext'
import {useForm} from 'react-hook-form';
import Field from '../Field/Field';
import './Profile.css'


function Profile({signOut, onUpdateUserInfo}) {
	
  const currentUser = useContext(CurrentUserContext);

  const [isEdited, setIsEdited] = useState(false);
  const [serverErr, setServerErr] = useState('')

  const { handleSubmit, formState: {errors}, control, getValues} = useForm({
    values: {
        email: currentUser.email,
        name: currentUser.name
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

  const onSubmit = (e) => {
      if (!isEdited) {
        return setIsEdited(true);
      }
	  const values = getValues();
	  if (currentUser.email === values.email && currentUser.name === values.name) {
		setIsEdited(false)
		return
	  }
	  onUpdateUserInfo(values)
	  .then((res)=>{
		if (res) {
			setIsEdited(false)
			setServerErr('')
			return
		}
		setServerErr('Пользователь с таким email уже существует')
	  })

    }

  return (
	<div className={`profile ${isEdited && 'profile_edited'}`}>
		<form className='profile__form' onSubmit={handleSubmit(onSubmit)}>
			<h3 className='profile__title'>{`Привет, ${currentUser.name}!`}</h3>
			<fieldset className='profile__set'>
				<Field name='name' rules={formConfig.name} control={control} onChange={setServerErr} text='Имя' placeholder='Афанасий' isEdited={isEdited}/>
				<Field name='email' rules={formConfig.email} control={control} onChange={setServerErr}text='E-mail' placeholder='mailbox@gmail.com' isEdited={isEdited}/>
				{isEdited && <span className='profile__error'>{errors.name && `${errors.name.message}`} {errors.email && `${errors.email.message}`} {serverErr}</span>}
				<button disabled={isEdited && (errors.name || errors.email)}  className={`profile__btn ${isEdited && (errors.name || errors.email) &&  'profile__btn_disabled'}`}>{isEdited ? 'Сохранить' : 'Редактировать'}</button>
				<p className='profile__btn profile__btn_exit' onClick={signOut}>Выйти из аккаунта</p>
			</fieldset>
		</form>
	</div>
  );
} 
  
export default Profile