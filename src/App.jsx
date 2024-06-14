import './App.css'
// import Carousel from './components/Carousel'
import Header from './components/Header'
import Experiments from './components/Experiments'
import Ops from './components/Ops'
import Blog from './components/Blog'
import FancyCards from './components/FancyCards'
function App() {


  return (
    <>
      <Header />
      {/* <Carousel/> */}
      <FancyCards/>
      <Experiments/>
      <Ops/>
      <Blog/>
    </>
  )
}

export default App
