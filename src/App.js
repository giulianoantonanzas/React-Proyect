import './assets/style/def.scss'
import Navbar from './components/Navbar/Navbar'
import Masthead from './components/Masthead/Masthead'
import About from './components/About/About'
import Products from './containers/Products/Products'

function App() {
  return (
    <>
    <Navbar/>
    <Masthead/>
    <About/>
    <Products/>
    </>
  );
}

export default App;
