import './App.css';
import MainConteiner from './Components/Main-Conteiner';
import {Route , Routes} from 'react-router-dom';
import {connect} from "react-redux";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainConteiner />}/>
      </Routes>
      
    </div>
  );
}

export default App;
