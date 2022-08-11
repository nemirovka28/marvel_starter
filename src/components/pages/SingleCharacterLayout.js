import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useMarvelService from '../../service/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/errorMassage';

import './singleCharacterLayout.scss';

const SingleCharacterLayout = () => {

    const {comicId} = useParams();
    const [names, setNames] = useState(null);
    const {loading,error,getCharacters, clearError} = useMarvelService();

    useEffect(()=> {
        updateName();
     }, [comicId])

     const updateName = () => {
        clearError();
        getCharacters(comicId).then(onComicLoaded)
    }

    const onComicLoaded = names => {
        setNames(names);
    }

    const errorMassage = error ? <ErrorMassage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !names) ? <View names = {names}/>: null;

    return (
        <>
            {errorMassage}
            {spinner}
            {content}
        </>
    )
}

const View = ({names}) => {
    const {name, description, thumbnail} = names;
    return (
        <div className="single-comic">
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        <Link to="/" className="single-comic__back">Back to all</Link>
    </div>
    )
}

export default SingleCharacterLayout;