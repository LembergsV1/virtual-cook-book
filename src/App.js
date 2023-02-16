import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import { APIContextProvider } from './Components/apiContext';
import RecipeDetails from './Components/RecipeDetails';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/store';



function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/create" element={<Create />}/>
          <Route path="/recipes/:id" element={<RecipeDetails />}/>
        </Routes>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
