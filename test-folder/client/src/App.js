import AH2022 from './AH2022/AH2022';
import AG from './AG/AG';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function Splash() {
  return (
    <div className="App">
      <header className="App-header">
        <AH2022 bezos="s1"/>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/autograder" element={<AG />} />
      </Routes>
    </Router>
  );
}


export default App;
