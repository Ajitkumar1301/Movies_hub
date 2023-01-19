import {useState,useEffect} from 'react'
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';

const Movies = () => {
  const[content,setContent]=useState([]);

  const fetchTrending=async()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=ta-IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate=${process.env.REACT_APP_API_KEY}`);
      console.log(data);
      setContent(data.results);

  }    


 useEffect(()=>{
  fetchTrending();
 },[]); 

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
  </>
)
}

export default Movies
