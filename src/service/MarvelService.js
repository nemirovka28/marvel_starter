import { getAllByAltText } from "@testing-library/react";

export default class MarvelService {

    _APIBASE = 'https://gateway.marvel.com:443/v1/public/';
    _APIKEY = 'apikey=0f0b4c1cdd02b439fd1a6a3ba7c07876';

    getResource = async (url) => {
        let res = await fetch (url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    getAllCharacters = () => {
        return this.getResource(`${this._APIBASE}characters?limit=9&offset=210&${this._APIKEY}`);
    }
    getCharacters = (id) => {
        return this.getResource(`${this._APIBASE}characters/${id}?&${this._APIKEY}`);
    }
}