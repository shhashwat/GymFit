import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';
import Footer from './components/Footer';
const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m = "auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path = '/exercise/:id' element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App;
