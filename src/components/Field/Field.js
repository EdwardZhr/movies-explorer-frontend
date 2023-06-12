import {forwardRef } from 'react';
import {useController} from 'react-hook-form';
import './Field.css';

const Field = forwardRef(({ control, rules, name, isEdited, text , type, placeholder, onChange}, ref) =>{
    const {
        field,
        fieldState: { invalid }
    } = useController({
        name,
        control,
        rules
    });

    function change(e) {
        field.onChange(e)
        if(onChange) {
            onChange('')
        }
    }

    return (
        <label className={`field ${isEdited && 'field_edited'}`}>
            <span className={`field__label ${isEdited && 'field__label_edited'}`}>{text}</span>
            <input 
                onChange={change}
                onBlur={field.onBlur}
                value={field.value}
                name={field.name}
                ref={field.ref}
                className={`field__input ${isEdited && 'field__input_edited'} ${invalid && 'field__input_invalid'}`} 
                readOnly={!isEdited}
                type={type}
                placeholder={placeholder}
            />
        </label>
    )
})
export default Field