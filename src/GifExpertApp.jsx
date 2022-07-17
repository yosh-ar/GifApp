import { useState,  } from "react"
import { InputApp } from "./components/InputApp"
import { GifGrind } from "./components/GifGrind"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Valorant"])
    // console.log(categories)
    const addCategory = (valor) =>{
        setCategories([ valor,...categories]);
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        {/* <InputApp setCategories={setCategories}/> */}
        <InputApp setCategories={addCategory}/>
        {
                categories.map((category) =>(
                    <GifGrind key={category} category={category}/>
                ))
            }
    </>
  )
}
