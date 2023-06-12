import './Toast.css';

function Toast({text, isDisplayed}) {
    return (
      <div className= {`toast__container ${isDisplayed ? 'toast__container_displayed' : ''}`}>
        <p className='toast'>{text}</p>
      </div>
    );
  }
  
  export default Toast;