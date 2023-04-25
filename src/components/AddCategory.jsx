import { useState } from 'react';



export const AddCategory = ({onNewCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        if( inputValue.trim().length <= 3 ) return;
        // console.log(inputValue)
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategories(inputValue.trim())
        setInputValue('');
      
    }

  return (
    <form onSubmit={ onSubmit } >
           {/* onSubmit={ (event) => onSubmit(event)} */}
        <input 
        type="text"
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange = { onInputChange }
         />

    </form>
  )
}
