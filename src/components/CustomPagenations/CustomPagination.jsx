import React from 'react'
import Pagination from '@mui/material/Pagination';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material';
import './CustomPagination.css'

// const useStyles=makeStyles((theme) => ({
//   pagination: {
//     color: 'red',
//   },
// }));

const theme = createTheme({
  palette: {
    secondary: {
      main: '#0af4fc',
    },
  },
});

const CustomPagination = ({setPage,numofPages =10}) => {
  const classes = useStyles();
const handlepagechange=(page)=>{
  setPage(page);
  window.scroll(0,0);
}

  return (
 <div style={{
  width:'100%',
  display:'flex',
  justifyContent:'center',
  marginTop:'10',
 }}>
  
  <ThemeProvider theme={theme}>
    
  <Pagination count={numofPages} 
     className={classes.pagination}
onChange={(e)=>handlepagechange(e.target.textContent)}
variant="outlined"
color='secondary'
hideNextButton
hidePrevButton />

    </ThemeProvider>

 </div>
  )
}

export default CustomPagination
