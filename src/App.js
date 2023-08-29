import "./App.css"
// import React, { useState } from 'react'
// const App = () => {
//   let newTime= new Date().toLocaleTimeString();
//   const [ctime, setCtime] = useState(newTime);

//   const UpdateTime = ()=>{
//     newTime= new Date().toLocaleTimeString();
//     setCtime(newTime);
//   }
//     return (
//     <div>
//        <h1>{ctime}</h1>
//        <button onClick={UpdateTime}>GET TIME</button>

//     </div>
//   );
//   }

// export default App;


// import React, { useState } from 'react'

// const App = () => {

//   let time = new Date().toLocaleTimeString();

//   const [ctime,setCtime]= useState(time);

//   const Updatetime= () =>{
//     time = new Date().toLocaleTimeString();
//     setCtime(time);
//   };

//   setInterval(Updatetime,1000);
//   return (
//     <>
//     <h1>{ctime}</h1>
//     {/* <button onClick={Updatetime}>GET TIME</button> */}
//     </>
//   )
// }

// export default App





// import React, { useEffect, useState } from 'react'

// function App() {

//   const [num ,setNum]=useState(2);
//   const [data ,setData]=useState([]);
//   // const [num2,setNum2]=useState(5)
//   useEffect(() =>{
//     // window.alert(" useEffect called")
//     async function getData(){
//         const get= await fetch(`https://hub.dummyapis.com/employee?noofRecords=${num}&idStarts=1001`);

//         const res=await get.json();
//         setData(res);
//         console.log(res);
//     }
//     getData();
//     document.title =` (${num}) Online `;

//   }, [num])


//   return (
//     <div>
//       <h1>UseEffect Hook</h1>
//       {console.log("inside jsx")}
//       <button onClick={()=>setNum(num+5)}>Click Me and Get Data-{num}</button>

//       <br/><br/>
//       {/* <button onClick={()=>setNum2(num2-1)}>Click Me baby-{num2}</button> */}
//       {
//         data.map((element,index)=>{
//           return (
//             <div className="data" key={index}>
//             <h4>{element.firstName}</h4>
//             <h4>{element.lastName}</h4>
//             <h4>{element.email}</h4>
//             <img src={element.imageUrl} alt="" />
          
//             </div>
//           )
//         })
//       }
      
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import Home from './Home';
import Contact from "./Contact";
import About from "./About";
import Heading from "./Heading";
import Error from "./Error";
import Insta from "./Insta";
import Mail from "./Mail";
import Userdetails from "./Userdetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App(){
  
  return (
        <Router>
        <div>
          <Heading/>
          
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home/:userid" element={<Userdetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}>
              <Route index element={<Insta/>}/>
              <Route index path="insta" element={<Insta/>}/>
              <Route path="mail" element={<Mail/>}/>
           </Route>
          <Route path="/*" element={<Error/>} />
        </Routes>
          
        </div>
        </Router> 

      )
}
export default App