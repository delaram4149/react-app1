
import { useState } from 'react';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import ProductPage from './routes/ProductPage'
import PostPage from './routes/PostPage';
import ProfilePage from './routes/ProfilePage';
import HomePage from './routes/HomePage';
import NotFoundPage from './routes/NotFoundPage';




function App() {
 
 

return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/products' element={<ProductPage/>}/>
    <Route path='/post' element={<PostPage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Routes>
 
  </BrowserRouter>

)
}


export default App;
