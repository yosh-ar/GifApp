import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useImgFech = (category)=>{
    const [imagenes, setImagenes] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImg = async()=>{
        const newImage = await  getGif(category);
        setImagenes(newImage);
        setIsloading(false);
   }
    useEffect(() =>{
        getImg()
    },[]);

    return {
        imagenes,
        isLoading
    }
}