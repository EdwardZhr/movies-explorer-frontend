import {useState} from 'react';

function useResize() {
    const [width, setWidth] = useState(window.innerWidth);
    
    window.addEventListener('resize',(e) => {
        setWidth(window.innerWidth);
    })

    return width;
  }

export default useResize