import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import useMarvelService from '../../service/MarvelService.js';
import Spinner from '../spinner/Spinner'
import ErrorMassage from '../errorMassage/errorMassage';
import './singleComicPage.scss';
import xMen from '../../resources/img/x-men.png';

const SingleComicPage = () => {

    const {comicId} = useParams();
    const [comics, setComics] = useState(null);
    const {loading,error,getComics, clearError} = useMarvelService();

    useEffect(()=> {
        updateComics();
     }, [comicId])

     const updateComics = () => {
        clearError();
        getComics(comicId).then(onComicLoaded)
    }

    const onComicLoaded = comics => {
        setComics(comics);
    }

    const errorMassage = error ? <ErrorMassage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comics) ? <View comics = {comics}/>: null;

    return (
        <>
            {errorMassage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comics}) => {
    const {title, description, pageCount, thumbnail, language, price} = comics;
    return (
        <div className="single-comic">
        <img src={thumbnail} alt={title} className="single-comic__img"/>
        <div className="single-comic__info">
            <h2 className="single-comic__name">{title}</h2>
            <p className="single-comic__descr">{description}</p>
            <p className="single-comic__descr">{pageCount}</p>
            <p className="single-comic__descr">{language}</p>
            <div className="single-comic__price">{price}</div>
        </div>
        <Link to="/comics" className="single-comic__back">Back to all</Link>
    </div>
    )
}

export default SingleComicPage;