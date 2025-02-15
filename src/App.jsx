
import { useState } from 'react';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import ProductPage from './routes/ProductPage'
import PostPage from './routes/PostPage';
import ProfilePage from './routes/ProfilePage';
import HomePage from './routes/HomePage';
import NotFoundPage from './routes/NotFoundPage';
import SinglePostPage from './routes/SinglePostPage';
import ProfileOrderPage from './routes/ProfileOrderPage';
import ProfileAddressPage from './routes/ProfileAddressPage';





function App() {
 
 

return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}>

    <Route  path='/post' element={<PostPage/>}>
    <Route path='/post/:id' element={<SinglePostPage/>}/>
    </Route>
    

    <Route path='/products' element={<ProductPage/>}/>

    <Route path='/profile' element={<ProfilePage/>}>
    <Route path='/profile/order' element={<ProfileOrderPage/>}/>
    <Route path='/profile/address' element={<ProfileAddressPage/>}/>
    </Route>
    </Route>

    
     
    
   


    



    
    <Route path='*' element={<NotFoundPage/>}/>
  </Routes>
 
  </BrowserRouter>

)
}


export default App;
