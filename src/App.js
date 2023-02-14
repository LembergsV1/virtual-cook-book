import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/create" element={<Create />}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
