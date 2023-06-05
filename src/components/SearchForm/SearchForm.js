import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useForm, useController} from 'react-hook-form';
import './SearchForm.css';


function SearchForm({onSearch, query}) {

  const rule = { required: 'Нужно ввести ключевое слово' }
  const { handleSubmit, formState: {errors}, control, getValues } = useForm({
    defaultValues: {search: query.search, checkbox: query.checkbox}
  });

  const {
    field,
} = useController({
    name: 'search',
    control,
    rules: rule,
});


    function onSubmit() {
      const values = getValues();
      onSearch(values)
    }

    return (
      <form className= 'search-form' onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='search-form__set'>
          <label className='search-form__field'>
            <input  
                    placeholder="Фильм"
                    className='search-form__input' 
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    value={field.value}
                    name={field.name}
                    type=''/>
            {JSON.stringify(errors) !== '{}' && <span className='search-form__error'>{errors.search.message}</span> } 
          </label>
          <button className='search-form__submit-btn'/>
        </fieldset>
          <FilterCheckbox control={control} name='checkbox'  onClick={handleSubmit(onSubmit)}/>
      </form>
    );
  }
  
  export default SearchForm;