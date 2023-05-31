import * as React from 'react'
import {useRef, useState} from "react";
import { SearchInput } from '../atoms/search-input';
import {container, singleImage} from './fetch-images.module.css';

export function ImageSearch() {
    const inputRef = useRef();
    const [imageList, setImageList] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = 'R453bfuBJoWyTjJwQS6LstAMzKgHJRre';
    const url = (searchParam) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchParam}`;

    const onClickHandler = () => {
        setImageList(null);
        setLoading(true);
        const searchParam = inputRef.current.value;
        fetch(url(searchParam))
        .then(response => response.json())
        .then((images) => {
            setImageList(images.data);
            setError(null);
        })
        .catch((err) => {
            setError(true);
            setImageList(null);
        })
        .finally(() => {
            setLoading(false);
        });
    }
    
    return (
        <>
            <SearchInput ref={inputRef} onClick={onClickHandler} />
            {loading && <h3>A moment please...</h3>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {imageList && <div className={container}>{
                imageList.map((image => {
                    return <div className={singleImage}><img src={image.images.downsized.url} alt="giphy"/></div>
                }))
            }</div>}
        </>
    )
        ;
}
