import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './row.css'

function Row({title,fetchUrl,isposter}) {
    //console.log(fetchUrl);

//create a state
const[allmovies,setAllMovies]=useState()

const base_url = "https://image.tmdb.org/t/p/original/";

const fetchData=async()=>{

  const {data} = await tmdbAxiosInstance.get(fetchUrl)
 // console.log(data.results);
  setAllMovies(data.results)
}
 console.log(allmovies);

useEffect(()=>{
  fetchData()
},[])


  return (
    <div className='row'>
  <h1>{title}</h1>
  <div className="movies-row">
{
  allmovies?.map(item=>(
    <img className={`${isposter && `movie-poster`} movies`} src={`${base_url}/${isposter?item.poster_path:item.backdrop_path}`} alt="no" />
  ))
}
  </div>
    </div>
  )
}

export default Row





