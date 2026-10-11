import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentCrud from './Lab-24/StudentCrud'
import StudentDetails from './Lab-24/StudentDetails'
import Studentadd from './Lab-24/Studentadd'
// import Productcrud from './Lab-23/Productcrud'
// import Crud from './Lab-23/Crud'
// import MainApp from './Lab-19/MainApp'
// import A from './Lab-18/A'
// import Movielist from './Tmdb_api/Movielist'
// import Hookdemo from './lab-21/Hookdemo'
// import Eventdemo from './lab-21/Eventdemo'
// import Map_method from './Lab-17/Map_method'
// import Student from './Lab-17/Student'
// import Product from './Lab-17/Product'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Incre from './Incre'
// import './Incre.css'
// import './About.css'
// import About from './About'
// import Guj from './Guj'
// import Child from './Lab-16/Child'
// import Conditional from './Lab-16/Conditional'
// import Eventhandling from './Lab-16/Eventhandling'

function App() {
  // const [name,setName]=useState(" ")
  return (
    
    
    <>  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentCrud />}></Route>
      <Route path="/students" element={<StudentCrud />} />
      <Route path="/students/:id" element={<StudentDetails />} />
      <Route path="/students/edit/:id" element={<Studentadd/>}/>
    </Routes>
    </BrowserRouter>


  {/* <Crud/> */}
    {/* <Productcrud/> */}
    {/* <MainApp/> */}
    {/* lab-18 */}
     {/* <A name={name} setName={setName}/> */}
    {/* <Child/>
    <Conditional/>
    <Eventhandling/> */}
    {/* <Map_method/>
    <Student/>
    <Product/> */}
    {/* <Hookdemo/>
    <Eventdemo/> */}
    {/* <Movielist/> */}
    </>
  )
}

export default App