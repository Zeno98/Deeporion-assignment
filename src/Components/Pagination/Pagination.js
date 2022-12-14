import React from 'react'
import { ContextAllData } from '../../Context/ContextData'
import "./Pagination.css";

const Pagination = () => {

    const {showPerPage,onPaginationChange}=React.useContext(ContextAllData);
    const [counter,setCounter]=React.useState(1);
    let totalItemCount=327;
    let rem=Math.ceil(totalItemCount/showPerPage)
    

    const buttonClick=(type)=>{
        if(type==="prev"){
            if(counter===1){
                setCounter(1)
            }
        else{
            setCounter(counter-1)
        }
    }
    else if(type==="next"){
        if(counter<rem){
            setCounter(counter+1)
        }
        else{
            setCounter(rem)
        }
        
    }
    }
    React.useEffect(()=>{
        const value=showPerPage * counter;

        onPaginationChange(value-showPerPage,value)

    },[counter])

  return (
    <div className='btn-main-div'>
        <button className='btn btn-primary' onClick={()=>buttonClick("prev")}>Previous</button>
        <button className='btn btn-primary' onClick={()=>buttonClick("next")}>Next</button>
    </div>
  )
}

export default Pagination