import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/home";
import createemployee from "./pages/createemployee";
import showemployee from "./pages/showemployee";
import editemployee from "./pages/editemployee";
import deleteemployee from "./pages/deleteemployee";

const App = () => {
 return (
   <Routes>
     <Route path="/" element={<home />} />
     <Route path="/employee/create" element={<createemployee />} />
     <Route path="/employee/details/:id" element={<showemployee />} />
     <Route path="/employee/edit/:id" element={<editemployee />} />
     <Route path="/employee/delete/:id" element={<deleteemployee />} />
   </Routes>
 )
}

export default App