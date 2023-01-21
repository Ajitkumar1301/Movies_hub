import { Pagination } from '@mui/material';
import React from 'react'
import './CustomPagination.css'



const CustomPagination = ({setPage,numofPages =10}) => {

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
  
    
  <Pagination count={numofPages} 
  sx={{
    "Button.MuiPaginationItem-root":{
      color:'cyan'
  }
  }}
onChange={(e)=>handlepagechange(e.target.textContent)}
variant="outlined"
color='primary'
hideNextButton
hidePrevButton />


 </div>
  )
}

export default CustomPagination
