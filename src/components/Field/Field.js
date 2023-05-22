import {forwardRef, useRef} from 'react';
import {useController} from 'react-hook-form';
import './Field.css';

const Field = forwardRef(({ control, rules, name, isEdited, text , type}, ref) =>{
    const {
        field,
        fieldState: { invalid }
    } = useController({
        name,
        control,
        rules
    });

    return (
        <label className={`field ${isEdited && 'field_edited'}`}>
            <span className={`field__label ${isEdited && 'field__label_edited'}`}>{text}</span>
            <input 
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                name={field.name}
                ref={field.ref}
                className={`field__input ${isEdited && 'field__input_edited'} ${invalid && 'field__input_invalid'}`} 
                readOnly={!isEdited}
                type={type}
            />
        </label>
    )
})
export default Field