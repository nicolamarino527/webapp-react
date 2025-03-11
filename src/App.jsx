import { useState } from 'react'
import './App.css'

// gestione rotte react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pagine
import HomePage from '../pages/HomePage';
import FilmsPage from '../pages/FimsPage';


// layout
import DefaultLayout from '../layout/DefaultLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route index path="/movies/:id" element={<FilmsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
