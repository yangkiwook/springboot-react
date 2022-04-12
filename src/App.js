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

  const [ boards, setBoards ] = useState([
    {id: 1, category: "2g", content: "ABCDEFG", registered: "a", registrationDate: "2022-04-01", recommend: 0, viewflg: 0}
    ,{id: 2, category: "3g", content: "BBBBBBB", registered: "b", registrationDate: "2022-05-01", recommend: 0, viewflg: 0}
    ,{id: 3, category: "6g", content: "CCCCCCC", registered: "c", registrationDate: "2022-03-01", recommend: 0, viewflg: 0}
    ,{id: 4, category: "4g", content: "ZZZZZZZ", registered: "d", registrationDate: "2022-12-01", recommend: 0, viewflg: 0}
    ,{id: 5, category: "1g", content: "EEEEEEEE", registered: "e", registrationDate: "2022-10-01", recommend: 0, viewflg: 0}
    ,{id: 6, category: "4g", content: "HHHHHHHHH", registered: "f", registrationDate: "2022-07-01", recommend: 0, viewflg: 0}
    ,{id: 7, category: "5g", content: "PPPPPP", registered: "g", registrationDate: "2022-06-01", recommend: 0, viewflg: 0}
  ]);

  return (
    <div className="App">
      <Login />
      <Router>
        <Routes>
          <Route path="/" element={ <List boards={ boards } setBoards={ setBoards } /> } /> {/* 初期画面「List.tsx」が表示される */}
          <Route path="/write" element={ <Write boards={ boards } setBoards={ setBoards } /> }  /> 
          <Route path="/detail" element={ <Detail boards={ boards } setBoards={ setBoards } /> } /> 
        </Routes>
      </Router>
    </div>
  );
}
export default App;

