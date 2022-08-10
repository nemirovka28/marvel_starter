import { useState, useEffect } from 'react'; 
import {useParams, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import useMarvelService from '../../service/MarvelService.js';
import Spinner from '../spinner/Spinner'
import ErrorMassage from '../errorMassage/errorMassage';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const {loading,error,getCharacters, clearError} = useMarvelService();

     useEffect(()=> {
        updateChar();
     }, [props.charId])

     const updateChar = () => {
        const {charId} = props;
        if(!charId) {
            return;
        }
        clearError();
        getCharacters(charId).then(onCharLoaded)
    }

    const onCharLoaded = char => {
        setChar(char);
    }

        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMassage = error ? <ErrorMassage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char = {char}/>: null;

        return (
            <div className="char__info">
                {skeleton}
                {errorMassage}
                {spinner}
                {content}
            </div>
        )
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki,comics,id} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
        return (
            <>
                <div className="char__basics">
                    <img src={thumbnail} alt={name} style={imgStyle}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics.length > 0 ? null : 'There is no comics with character'}
                    {
                        comics.map((item, i) => {
                            if (i > 9)return;
                            return (
                                <li key = {id} className="char__comics-item">
                                    <Link to = {`/comics/${item.resourceURI.split('').filter(el=>Number(el)).join('')}`}>{item.name}</Link> 
                                </li>

                            )
                        })
                    }

                </ul>

            </>
        )
}
CharInfo.propTypes = {
    charId: PropTypes.number
}
export default CharInfo;