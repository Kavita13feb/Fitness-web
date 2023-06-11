import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import "slick-carousel/slick/slick.css" ;
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
