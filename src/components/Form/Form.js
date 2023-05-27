import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Field from '../Field/Field';
import './Form.css'
import logo from '../../images/logo.svg';


function Form({title, fields, formConfig, btnText, children}) {
    const defaultValues = {};

    fields.forEach((item)=> {
        defaultValues[item.name] = '';
    })

    const { handleSubmit, formState: {errors}, control, watch} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
      });

    const data = watch();

    const onSubmit = (e) => {
        console.log(errors)
    }

    return (
        <div className='form'>
            <form className='form__container' onSubmit={handleSubmit(onSubmit)}>
                <Link to='/' className='form__logo'>
                    <img src={logo} alt='Логотип' />
                </Link>
                <h3 className='form__title'>{title}</h3>
                <fieldset className='form__set'>
                    {fields.map((item, index)=>{
                        return (<Field name={item.name} type={item.name==='password' ? 'password' : ''} rules={formConfig[item.name]} text={item.text} placeholder={item.placeholder} control={control} isEdited={true} key={index}/>)
                        })
                    }
                    {JSON.stringify(errors) !== '{}' && <span className='form__error'>Что-то пошло не так...</span> }
                    
                    {/* <span className='form__error'>
                        {fields.map((item)=>{
                            if (errors[item.name]) {
                                return (errors[item.name].message) 
                            } 
                        })
                    }
                    </span> */}
                    <button disabled={JSON.stringify(errors) !== '{}'} className={`form__btn ${(JSON.stringify(errors) !== '{}') &&  'form__btn_disabled'}`}>{btnText}</button>
                </fieldset>
                {children}
            </form>
        </div>
    );
} 
  
export default Form