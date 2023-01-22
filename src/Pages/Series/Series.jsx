import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagenations/CustomPagination';



const Series = () => {
    const[content,setContent]=useState([]);
    const[page,setPage]=useState(1)
  const[numofPages,setNumofPages]=useState();
  
    const fetchTrending=async()=>{
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        // console.log(data);
        setContent(data.results);
        setNumofPages(data.total_pages)
    }    
   
   useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);
  
  
   return (
    <>
    <span className='subtitle'>Movies</span>
    <div className='trending'>      
        {content && content.map((c)=><SingleContent 
        key={c.id}
         id={c.id} 
         poster={c.poster_path}
         title={c.title || c.name} 
         date={c.first_air_date || c.release_date}
         media_type={c.media_type}
         vote_average={c.vote_average}/>)
  }</div> 
  <CustomPagination setPage={setPage} numofPages={numofPages} />   
    </>
  )
  }
  
export default Series
