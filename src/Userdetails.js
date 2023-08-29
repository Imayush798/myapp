import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const Userdetails = () => {
    const {userId}= useParams();
    // const [num ,setNum]=useState(2);
    const [data ,setData]=useState({});
    const [searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get('name'));
    console.log(searchParams.get('age'));

    const Reset=()=>{
        setSearchParams({name:'ayush',age:'21'});
    }
  useEffect(() =>{
        async function getData(){
            const get= await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
    
            const res=await get.json();
            setData(res[0]);
        }
        getData();
        // document.title =` (${num}) online `;
    
      }, [])
  return (
    <>
    <h4>{data.id}</h4>
    <h4>{data.firstName}</h4>
    <h4>{data.lastName}</h4>
    <img src={data.imageUrl} alt="" />
    <h4>{data.age}</h4>
    <h4>{data.dob}</h4>
    <button onClick={Reset}>reset</button>
    </>
  )
}

export default Userdetails