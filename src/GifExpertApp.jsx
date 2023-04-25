import {useState} from 'react';
import { AddCategory, GridGif } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (onNewCategories) => {

      if( categories.includes(onNewCategories) ) return;
        // console.log(onNewCategories);
        setCategories([onNewCategories, ...categories]);
        // setCategories(cat => [...cat, 'Valorant'])
    };
  return (
    <>
            <h1>GifExpertApp</h1>

            <AddCategory 
            // setCategories={setCategories} 
            onNewCategories = {value => onAddCategory (value)}/>

            {/* <button onClick={onAddCategory} >Agregar</button> */}
            
            <ol>
                {
                categories.map( category  => ( 
                <GridGif key={category} 
                category={category
                }/>
                      // <div key={category} >
                      //   <li> {category} </li>
                      // </div>
                    ))
                };
            </ol>
    </>

  )
}
