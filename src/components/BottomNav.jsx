import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import MovieIcon from '@mui/icons-material/MovieFilterSharp';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

// import { Link } from 'react-router-dom';



export default function SimpleBottomNavigation() {
  const navigate=useNavigate();  
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        sx={{width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#131a28",
        zIndex: 100,}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
         <BottomNavigationAction label="Trending" onClick={()=>navigate('/')}  style={{ color: "white" }} icon={<WhatshotSharpIcon />} />
         <BottomNavigationAction label="Movies"  onClick={()=>navigate('/movies')} style={{ color: "white" }} icon={<MovieIcon />} />
         <BottomNavigationAction label="TV Series" onClick={()=>navigate('/series')} style={{ color: "white" }} icon={<TvIcon />} />
         <BottomNavigationAction label="Search" onClick={()=>navigate('/search')} style={{ color: "white" }} icon={<SearchIcon />} />
       </BottomNavigation>
    </Box>
  );
}














// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
// import MovieIcon from '@mui/icons-material/MovieFilterSharp';
// import TvIcon from '@mui/icons-material/Tv';
// import SearchIcon from '@mui/icons-material/Search';

// import { Link } from 'react-router-dom';

// export default function SimpleBottomNavigation() {
//   const [value, setValue] = useState(0);

//   return (
//     <Box sx={{ width: '100%' }}>
//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <Link to='/'>
//         <BottomNavigationAction label="Trending" icon={<WhatshotSharpIcon />} /></Link>
//         <Link to='/movies'>
//         <BottomNavigationAction label="Movies" icon={<MovieIcon />} /></Link>
//         <Link to='/series'>
//         <BottomNavigationAction label="TV Series" icon={<TvIcon />} /></Link>
//         <Link to='/search'>
//         <BottomNavigationAction label="Search" icon={<SearchIcon />} /></Link>
//       </BottomNavigation>
//     </Box>
//   );
// }