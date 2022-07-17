import { useState } from "react"

export const InputApp = ({setCategories}) => {
    const [valInput, setInputValue] = useState('');

    const updateInput = (e)=>{
        const valor = e.target.value;
        setInputValue(valor);

    }
    const anularSubmit = (e)=>{
        e.preventDefault();
        if(valInput.trim().length<=1)return;
        // setCategories(category => [...category , valInput]);
        setCategories(valInput);
        setInputValue('')
    }

  return (
    <form onSubmit={anularSubmit}>
        <input type="text" placeholder="Ingresa gif" value={valInput} onChange={updateInput} />
        <br />
        <br />
        <br />
        <br />
    </form>
  )
}
