import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data:images,loading} = useFetchGifs(category);
    // const [images, setImages] = useState([]);
    //Se ejecuta este codigo cuando el componente es renderizado por primera vez

    // useEffect(()=>{
    //     getGifs(category).then(setImages);
    // },[category])

    return (
        <>
            <h3>{category}</h3>    
            {loading&& <p className="animate__animated animate__flash">Cargando</p>}       
            <div className="card-grid">
                    {
                        images.map(img=>(
                            <GifGridItem 
                            key={img.id}
                            {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}