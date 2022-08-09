import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import useMarvelService from '../../service/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMassage/errorMassage';
import './comicsList.scss';

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, clearError, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    },[])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded);
    }
    const onComicsListLoaded = (newComicsList) => {
        clearError();
        let ended = false;
        if( newComicsList.length < 8 ) {
            ended = true;
        }
        setComicsList([...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset + 8);
        setComicsEnded(ended);

    }

    function renderItems(arr) {
        const items =  arr.map((item) => {
            return (
            <li className="comics__item"
                tabIndex={0}
                key={item.id}>
                <Link to = {`/comics/${item.id}`}>
                    <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                    <div className="comics__item-name">{item.title}</div>
                    <div className="comics__item-price">{item.prices > 0 ? item.prices+'$' : 'NOT AVAILABLE ' }</div>
                </Link>
            </li>
            )
        });
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

        const items = renderItems(comicsList);
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
                        style={{'display': comicsEnded  ? 'none' :  'block'}}>
                 <div className="inner">load more</div>
                    </button>
            </div>
        )
}

export default ComicsList;