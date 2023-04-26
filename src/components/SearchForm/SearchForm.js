import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';


function SearchForm() {
    return (
      <form className= 'search-form' action='#'>
        <fieldset className='search-form__set'>
            <input  placeholder="Фильм" className='search-form__input'/>
            <button className='search-form__submit-btn'/>
        </fieldset>
      <FilterCheckbox/>
      </form>
    );
  }
  
  export default SearchForm;