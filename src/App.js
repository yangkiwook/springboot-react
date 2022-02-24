/* eslint-disable */
import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import List from './components/List';
import Write from './components/Write';
import Detail from './components/Detail';

function App() {

  const [ boards, setBoards ] = useState([]);

  return (
    <div className="App">
      <Login />
      <Router>
        <Routes>
          <Route exact path="/" element={ <List boards={ boards } /> } /> 
          <Route exact path="/write" element={ <Write boards={ boards } setBoards={ setBoards }  /> }  /> 
          <Route exact path="/detail" element={ <Detail boards={ boards } /> } /> 
        </Routes>
      </Router>
    </div>
  );
}
export default App;

