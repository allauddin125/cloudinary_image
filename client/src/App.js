import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './component/Register';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
