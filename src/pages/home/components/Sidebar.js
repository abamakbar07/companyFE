import React, { useState } from 'react'

const Sidebar = () => {
   const [mainContent, setMainContent] = useState("dashboard");

   const clickMainContent = (e) => {
      setMainContent(e)
   }
 
   return (
     <div className="col-sm-3 p-0">
       <div className="Sidebar text-white">
         <div className="MainHeader">
           <h2>MYAPP</h2>
         </div>

         <div className="MainContent">
           <ul className={mainContent == "dashboard" ? "MainContentActive" : "d-block"}
               onClick={(e) => clickMainContent("dashboard")}>Dashboard</ul>
           <ul className={mainContent == "transaction" ? "MainContentActive" : "d-block"}
               onClick={(e) => clickMainContent("transaction")}>Transaction</ul>
           <ul className={mainContent == "inventory" ? "MainContentActive" : "d-block"}
               onClick={(e) => clickMainContent("inventory")}>Inventory</ul>
           <ul className={mainContent == "setting" ? "MainContentActive" : "d-block"}
               onClick={(e) => clickMainContent("setting")}>Setting</ul>
         </div>

         <div className="MainFooter container">
           <p>Logout</p>
         </div>
       </div>
     </div>
   );
}

export default Sidebar
