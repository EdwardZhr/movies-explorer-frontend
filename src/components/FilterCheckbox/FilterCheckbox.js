import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <fieldset className='filter-checkbox'>
            <label className='filter-checkbox__label'>
                <span className='filter-checkbox__title'>Короткометражки</span>
                <div className='filter-checkbox__wrapper'>
                    <input className='filter-checkbox__input' type='checkbox'/>
                    <span className='filter-checkbox__slider'/>
                </div>
            </label>
        </fieldset>
    );
  }
  
  export default FilterCheckbox;