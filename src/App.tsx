import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import Project from './components/Portfolio/Project'
import Blogs from './components/Blogs/Blogs'
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/project/:id' element={<h1 style={{ marginTop: '200px' }}>{<Project />}</h1>} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
