import { useHttp } from "../hooks/http.hook";

 const useMarvelService = () =>  {
    const {loading, request, error, clearError} = useHttp();

    const _APIBASE = 'https://gateway.marvel.com:443/v1/public/';
    const _APIKEY = 'apikey=0f0b4c1cdd02b439fd1a6a3ba7c07876';
    const _BASEOFFSET = 210;
    const _COMICSURL = 'https://gateway.marvel.com:443/v1/public/comics';

    const getAllCharacters = async (offset = _BASEOFFSET) => {
        const res = await request(`${_APIBASE}characters?limit=9&offset=${offset}&${_APIKEY}`);
        return res.data.results.map(_transformCharacter);
    }
    const getCharacters = async (id) => {
        const res =  await  request(`${_APIBASE}characters/${id}?&${_APIKEY}`);
        return _transformCharacter(res.data.results[0]);
    }
    const getComics = async (offset = _BASEOFFSET) => {
        const res =  await  request(`${_COMICSURL}?limit=8&offset=${offset}&${_APIKEY}`);
        console.log(res)
        return res.data.results.map(_transformComics);
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
    const  _transformComics = (char) => {
        return {
            id: char.id,
            title: char.title,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            prices: char.prices[0].price,
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacters,getComics};
}
export default useMarvelService;