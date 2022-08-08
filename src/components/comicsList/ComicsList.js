import { useState, useEffect } from 'react';
import useMarvelService from '../../service/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMassage/errorMassage';
import './comicsList.scss';

const ComicsList = () => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    },[])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getComics(offset)
            .then(onCharListLoaded);
    }
    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if( newCharList.length < 8 ) {
            ended = true;
        }
        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setCharEnded(charEnded => ended);

    }

    function renderItems(arr) {
        const items =  arr.map((item,i) => {

            return (
            <li className="comics__item"
                tabIndex={0}
                key={i}>
                <a href="#">
                    <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                    <div className="comics__item-name">{item.title}</div>
                    <div className="comics__item-price">{item.prices > 0 ? item.prices+'$' : 'NOT AVAILABLE ' }</div>
                </a>
            </li>
            )
        });
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

        const items = renderItems(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading && !newItemLoading ? <Spinner/> : null;

        return (
            <div className="comics__list">
                {errorMessage}
                {spinner}
                {items}
                    <button 
                        className="button button__main button__long"
                        onClick={()=> onRequest(offset)}
                        disabled={newItemLoading}
                        style={{'display': charEnded ? 'none' :  'block'}}>
                 <div className="inner">load more</div>
                    </button>
            </div>
        )
}

export default ComicsList;