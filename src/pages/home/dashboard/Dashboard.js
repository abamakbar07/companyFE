import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
   const [sideBar, setSideBar] = useState(true);
   
   const clickSideBar = () => {
     setSideBar(!sideBar);
   };

   return (
     <div className="dashboard d-block">

       <Sidebar sideBar={sideBar} clickSideBar={clickSideBar} />

       <div className={sideBar ? "col-md-9 offset-md-3 mainContent" : "col-md-12 mainContent"}>
         <h1 onClick={clickSideBar}>aw</h1>
       </div>
     </div>
   );
}

export default Dashboard
