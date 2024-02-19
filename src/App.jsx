
import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [pamount,setPamount] =useState(0)
  const [rate,setRate] =useState(0)
  const [time,setTime] =useState(0)
  const [Result,setResult]=useState(0)

  const [validpamount,setvalidpamount]=useState(false)
  const [validrate,setvalidrate]=useState(false)
  const [validtime,setvalidtime]=useState(false)

 const validInput=(e)=>{
  const{name,value}=e.target
  // console.log(name,value)
  if(value.match(/^[0-9]*.?[0-9]*$/)){
  if(name=='pamount'){
    setPamount(value)
    setvalidpamount(true)
  }
  else if(name=='rate'){
    setRate(value)
    setvalidrate(true)
  }
  else{
    setTime(value)
    setvalidtime(true)
  }

  }
  else{
    if(name=='pamount'){
      setPamount(0)
      setvalidpamount(false)
    }
    else if(name=='rate'){
      setRate(0)
      setvalidrate(false)
    }
    else{
      setTime(0)
      setvalidtime(false)
    }
  }
}
  //console.log(pamount,rate,time)
  //console.log(validpamount,validrate,validtime)

  const resetForm=()=>{
    setPamount(0)
    setRate(0)
    setTime(0)
    setResult(0)
   

    setvalidpamount(false)
    setvalidrate(false)
    setvalidtime(false)
    setResult(0)
    
    
  }
  const submitted=(e)=>{
    e.preventDefault()
    console.log(pamount,rate,time)
    const res=(pamount*rate*time)/100
    console.log(res)
    setResult(res)
    // console.log(typeof(pamount))
    // const pattern=/^[1-9][0-9]*$/
    // if(!pamount.match(pattern)){
    //   //alert("Invalid principle amount")
    //    setvalidpamount(true)
    // }
    // if(!rate.match(/^[1-9][0-9]{0,1}*$/)){
    //   alert("Invalid rate")
    // }
    // if(!time.match(/^[1-9][0-9]{0,1}*$/)){
    //   alert("Invalid time")
    // }
  }
 
  return (
    <>
    <div className='w-100 bg-dark d-flex justify-content-center align-items-center'style={{height:'100vh'}}>
      <div className='bg-light w-40 shadow rounded p-4'>
      <h4>Simple Interest Calculator</h4>
      <div className='d-flex justify-content-center p-5 border shadow mt-3 p-2' style={{backgroundColor:'yellow'}}>
      ₹{Result}
      </div>
      <form onSubmit={(e)=>{submitted(e)}}>
        <div className='mt=2 p-2'>
         <TextField id="outlined-basic"value={pamount} name='pamount' onChange={(e)=>{validInput(e)}} style={{width:'100%'}}label="₹ Principle Amount" variant="outlined"/>
         {
          !validpamount &&
          <div className='text-danger'>
            Invalid principle Amount
          </div>
         }
        </div>
        <div className='mt=3 p-2'>
         <TextField id="outlined-basic" value={rate}name='rate'onChange={(e)=>{validInput(e)}} style={{width:'100%'}} label=" %Rate" variant="outlined"/>
         {
          !validrate &&
          <div className='text-danger'>
            Invalid Rate
          </div>
         }
        </div>
        <div className='my=2 p-2'>
         <TextField id="outlined-basic" value={time} name='time'onChange={(e)=>{validInput(e)}} style={{width:'100%'}} label="Time" variant="outlined"/>
         {
          !validtime &&
          <div className='text-danger'>
            Invalid Duration
          </div>
         }
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" disabled={validpamount&&validrate&&validtime?false:true}type="submit" className='bg-dark' style={{height:'50px',width:'50%'}}>Submit</Button>
          <Button variant="contained"  className='bg-info'onClick={resetForm} style={{height:'50px',width:'50%'}}>Reset</Button>
        </Stack>
        

      </form>
    </div>
    </div>
    </>
  )
}

export default App
