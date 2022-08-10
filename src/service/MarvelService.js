import { useHttp } from "../hooks/http.hook";

 const useMarvelService = () =>  {
    const {loading, request, error, clearError} = useHttp();

    const _APIBASE = 'https://gateway.marvel.com:443/v1/public/';
    const _APIKEY = 'apikey=0f0b4c1cdd02b439fd1a6a3ba7c07876';
    const _BASEOFFSET = 210;

    const getAllCharacters = async (offset = _BASEOFFSET) => {
        const res = await request(`${_APIBASE}characters?limit=9&offset=${offset}&${_APIKEY}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacters = async (id) => {
        const res =  await  request(`${_APIBASE}characters/${id}?&${_APIKEY}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_APIBASE}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_APIKEY}`);
        return res.data.results.map(_transformComics);
    }

    const getComics = async (id) => {
        const res = await request(`${_APIBASE}comics/${id}?${_APIKEY}`);
        console.log(res.data.results[0].prices[0].price)
        return _transformComics(res.data.results[0]);
    }
    
    const  _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[0].url,
            comics: char.comics.items
        }
    }
    const  _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
            description: comics.description || 'There is no description for this character',
            language: comics.textObjects.language || 'en-us',

        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacters,getComics,getAllComics};
}
export default useMarvelService;