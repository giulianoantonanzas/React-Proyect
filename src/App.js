import './assets/style/def.scss'
import Navbar from './components/Navbar/Navbar'
import Masthead from './components/Masthead/Masthead'
import About from './components/About/About'
import Products from './containers/Products/Products'
import Services from './containers/Services/Services'

function App() {
  return (
    <>
    <Navbar/>
    <Masthead/>
    <About/>
    <Products/>
    <Services/>
    </>
  );
}

export default App;
