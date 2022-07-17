
import {ImgGrind} from '../components/ImgGrind';
import { useImgFech } from '../hooks/useImgFech';

export const GifGrind = ({category}) => {
  const {imagenes, isLoading} = useImgFech(category);
  return (
    <>
      <h2>{category}</h2>
      {
        isLoading && (<h2>Cargando</h2>)
      }
      <div className="card-grid">
          {
              imagenes.map((imagen)=>(
                    <ImgGrind key={imagen.id}
                    {...imagen}
                    />
              ))   
          }
      </div>
    </>
  )
}
