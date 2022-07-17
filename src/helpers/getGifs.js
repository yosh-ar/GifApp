export const getGif = async(busqueda)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uLE4geEzGezWaKEql1QayATsMmXUHA3P&q=${busqueda}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    // console.log(data);

    const gifs = data.map(img=>({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    })); 
    return gifs;
}