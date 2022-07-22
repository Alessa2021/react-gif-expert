import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


/* pBqrutpPXQ0wHd4yqd2UeV3HYza28IDr */
const GifExpertApp = () => {
const [categories, setCategories] = useState(['One Punch'])

const onAddCategory = ( newCategory) => {

  if( categories.includes(newCategory)) return

  setCategories([newCategory,...categories])
}

  return (
    <>
   
    <h1>GifExpertApp</h1>
   {/*  este componente va a traer una nueva ocurrencia del usuario y desde aqui la trabajaremos como una categoria nueva */}
    <AddCategory onNewCategory={ onAddCategory } />

    
      {
      categories.map( (category) => (
          /* este componente se ocupa de conectar con la api y pedir cada gif del estado de las categorias y renderizar a cada item */
            <GifGrid key={ category } category={ category } />)
        )
       
      }

   
    </>
    
  )
}

export default GifExpertApp