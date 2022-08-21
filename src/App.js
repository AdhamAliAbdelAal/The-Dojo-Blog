import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from "./Create";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container m-auto">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>

        </div>
      </div>
    </Router>

  );
}

export default App;
