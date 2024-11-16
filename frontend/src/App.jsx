import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import Createemployee from './pages/createemployee';
import Showemployee from './pages/showemployee';
import Editemployee from './pages/editemployee';
import Deleteemployee from './pages/deleteemployee';

const App = () => {
 return (
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/employee/create' element={<Createemployee />} />
     <Route path='/employee/details/:id' element={<Showemployee />} />
     <Route path='/employee/edit/:id' element={<Editemployee />} />
     <Route path='/employee/delete/:id' element={<Deleteemployee />} />
   </Routes>
 )
}

export default App