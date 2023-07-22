import { Routes, Route } from 'react-router-dom'
import ListPage from './pages/ListPage'
import Navbar from './components/Navbar'
import PostPage from './pages/PostPage'

function App() {

  return (
    <>
<Routes>
    <Route path='/' 
     element={<> <Navbar /><ListPage /></>}>
    </Route>
    <Route path='/:type' 
     element={<> <Navbar /><ListPage /></>}>
    </Route>
    <Route path='/item/:id' 
     element={<PostPage />}>
​​​​​​​    </Route>
</Routes>
    </>
  )
}

export default App
