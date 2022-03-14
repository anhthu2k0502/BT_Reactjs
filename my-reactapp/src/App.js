import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Router } from "react-router-dom";
import Formadd from "./Feature/formadd";
import Formdel from './Feature/formdel';
import Formview from './Feature/formview';
import { useState } from 'react';

function App() {
  const member = [
    { name: 'Nguyễn Văn A', age: 24 },
    { name: 'Nguyễn Văn B', age: 25 },

  ]





  const [memberList, setmemberList] = useState(member)
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/formview">View Users</Link>
        </li>
        <li>
          <Link to="/formadd">Add User</Link>
        </li>
        <li>
          <Link to="/formdel">Remove User</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/formview" element={<Formview props={memberList} />}></Route>
        <Route path="/formadd" element={<Formadd props={memberList} />} />
        <Route path="/formdel" element={<Formdel props={memberList} />} />
      </Routes>
    </div>
  );

}

function Home() {
  return (
    <h2>Welcome to the homepage!</h2>

  );
}

export default App;
