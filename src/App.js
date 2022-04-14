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
    {id: 1, category: "2g", content: "TEST_01", registered: "a", registrationDate: "2022-04-01", recommend: 0, viewflg: 0}
    ,{id: 2, category: "3g", content: "TEST_02", registered: "b", registrationDate: "2022-05-01", recommend: 0, viewflg: 0}
    ,{id: 3, category: "6g", content: "TEST_03", registered: "c", registrationDate: "2022-03-01", recommend: 0, viewflg: 0}
    ,{id: 4, category: "5g", content: "TEST_04", registered: "d", registrationDate: "2022-12-01", recommend: 0, viewflg: 0}
    ,{id: 5, category: "1g", content: "TEST_05", registered: "e", registrationDate: "2022-10-01", recommend: 0, viewflg: 0}
    ,{id: 6, category: "4g", content: "TEST_06", registered: "f", registrationDate: "2022-07-01", recommend: 0, viewflg: 0}
    ,{id: 7, category: "1g", content: "TEST_07", registered: "g", registrationDate: "2020-04-01", recommend: 0, viewflg: 0}
    ,{id: 8, category: "5g", content: "TEST_08", registered: "h", registrationDate: "2020-03-11", recommend: 0, viewflg: 0}
    ,{id: 9, category: "4g", content: "TEST_09", registered: "i", registrationDate: "2020-05-23", recommend: 0, viewflg: 0}
    ,{id: 10, category: "3g", content: "TEST_10", registered: "j", registrationDate: "2022-02-01", recommend: 0, viewflg: 0}
    ,{id: 11, category: "2g", content: "TEST_11", registered: "k", registrationDate: "2021-05-29", recommend: 0, viewflg: 0}
    ,{id: 12, category: "1g", content: "TEST_12", registered: "l", registrationDate: "2020-05-20", recommend: 0, viewflg: 0}
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

