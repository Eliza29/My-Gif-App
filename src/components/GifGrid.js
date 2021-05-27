import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
import 'animate.css'
const GifGrid = ({category}) => {
    
    // renombrando data
    const {data:images, loading} = useFetchGifs(category);

    return ( 
        <>
            <h3 className=" title-category animate__animated animate__fadeIn">{category}</h3>
            {loading && <p>loading...</p>}
            <div className="container-cards">
                {
                    images.map( img =>(
                        <GifGridItem  key={img.id} {...img} />
                    ))
                }
            </div>          
        </>
        
    );
}
 
export default GifGrid;