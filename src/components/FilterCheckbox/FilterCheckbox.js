import {forwardRef } from 'react';
import {useController} from 'react-hook-form';
import './FilterCheckbox.css';

const FilterCheckbox = forwardRef(({ control, name, onClick }, ref) =>{
    const {
        field,
        fieldState: { invalid }
    } = useController({
        name,
        control,
    });

    function change(e) {
        field.onChange(e)
        onClick()
    }

    return (
        <fieldset className='filter-checkbox' >
            <label className='filter-checkbox__label'>
                <span className='filter-checkbox__title'>Короткометражки</span>
                <div className='filter-checkbox__wrapper'>
                    <input 
                    className='filter-checkbox__input'
                    defaultChecked={field.value}
                    type='checkbox'
                    onChange={change}
                    onBlur={field.onBlur}
                    value={field.value}
                    name={field.name}
                    ref={field.ref}/>
                    <span className='filter-checkbox__slider'/>
                </div>
            </label>
        </fieldset>
    );
})

  export default FilterCheckbox;