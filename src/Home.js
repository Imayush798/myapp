import React, { useEffect, useState } from 'react'
import { Link,} from 'react-router-dom';

const Home = () => {
    const [num ,setNum]=useState(2);
  const [data ,setData]=useState([]);
  useEffect(() =>{
        async function getData(){
            const get= await fetch(`https://hub.dummyapis.com/employee?noofRecords=${num}&idStarts=1001`);
    
            const res=await get.json();
            setData(res);
            console.log(res);
        }
        getData();
        document.title =` (${num}) online `;
    
      }, [num])
  return (
    <div>
        <button onClick={()=>setNum(num+2)}>Click Me and Get Data-{num}</button>
          {
            data.map((element,index)=>{
              return (
                <Link to={`/home/${element.id}`}><div className="data" key={index}>
                <h4>{element.firstName}</h4>
                <h4>{element.lastName}</h4>
                <h4>{element.email}</h4>
                <img src={element.imageUrl} alt="" />
                </div></Link>
              )
            })
          }
    </div>
  )
}

export default Home