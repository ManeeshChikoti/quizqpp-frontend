import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import CreateQuestion from './Components/CreateQuestion';
import EditQuestion from './Components/EditQuestion';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Cards />}/>
        <Route path="/createQuestion" element={<CreateQuestion />}/>
        <Route path="/editQuestion" element={<EditQuestion />}/>
      </Routes>
    </div>
  );
}

export default App;