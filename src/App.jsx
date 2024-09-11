/* eslint-disable no-unused-vars */
import React from "react"
import Home from "./Home"
import Update from "./Update"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Create from "./Create"




function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Home />}></Route>
      <Route path="/Create"element={<Create />}></Route>
      <Route path="/Edit/:id"element={<Update />}></Route>

      </Routes>
      </BrowserRouter>
   
  )
}


export default App
