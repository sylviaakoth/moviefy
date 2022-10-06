import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar  from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Outlet />
    </div>
  );
}

export default App;
