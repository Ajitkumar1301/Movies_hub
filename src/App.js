import React from 'react'
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';


 
function App() {
return(
<>
<BrowserRouter>
<Header/>

<div className='app'>
<Container>
<Routes>
     <Route path='/' element={<Trending/>} exact/>
     <Route path='movies' element={<Movies/>}/>
     <Route path='series' element={<Series/>}/>
     <Route path='search' element={<Search/>}/>
</Routes>
</Container>
</div>

<BottomNav/>

</BrowserRouter>
</>    
  
    );
}

export default App;