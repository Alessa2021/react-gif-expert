/* rafc es para crear este tio de componente */
import { useState } from 'react';

export const AddCategory = ({onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if( inputValue.trim().length <= 1) return
        //setCategories( categories => [ inputValue, ...categories])
        setInputValue('')
        onNewCategory( inputValue.trim() )
        
    }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
        />

    </form>
    
  
  )
}
