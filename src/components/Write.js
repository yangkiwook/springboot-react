import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function Write({ boards, setBoards }) {

  const navigate = useNavigate();

  const [ categoryVal, setCategoryVal ] = useState('1g');
  const [ contentVal, setContentVal ] = useState('');
  const [ registeredVal, setRegisteredVal ] = useState('');
  const [ registrationDateVal, setRegistrationDateVal ] = useState(formatYmd(new Date()));
  const recommend = 0;
  const viewflg = 0;

  const addBoard = (event) => {

    //submitイベントのrefresh動作をキャンセルするメソッド
    event.preventDefault();

    //掲示板一覧の変更
    setBoards([
      //掲示板新規追加のデータが掲示板一覧の配列に追加される
      ...boards, 
      {
        category : categoryVal,
        content : contentVal,
        registered : registeredVal,
        registrationDate : registrationDateVal,
        recommend : recommend,
        viewflg : viewflg
      }
    ])
    
    //submit後、掲示板新規追加のデータを初期化する
    navigate("/");
  }

  return (
      <div className="container-div">
        <div className="menu-div">
          <p className="menu-p">掲示板追加</p>
        </div>
        <div className="write-div">
          <Form onSubmit={ addBoard }>
            <Form.Group className="mb-3" controlId="categoryVal">
              <Form.Label>カテゴリ</Form.Label>
                <Form.Select value={ categoryVal } onChange={(e) => setCategoryVal(e.target.value)} >
                  <option value="1g">1g</option>
                  <option value="2g">2g</option>
                  <option value="3g">3g</option>
                  <option value="4g">4g</option>
                  <option value="5g">5g</option>
                  <option value="6g">6g</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contentVal">
              <Form.Label>内容</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setContentVal(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registeredVal">
              <Form.Label>登録者</Form.Label>
              <Form.Control type="text" onChange={(e) => setRegisteredVal(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registrationDateVal">
              <Form.Label>登録日</Form.Label>
              <Form.Control type="date" value={ registrationDateVal } onChange={(e) => setRegistrationDateVal(e.target.value)} />
            </Form.Group>
            <div className="btn-div">
              <Button variant="secondary" size="lg" onClick={() => navigate(-1) } >戻る</Button>&nbsp;
              <Button variant="primary" size="lg" type="submit" >確認</Button>
            </div>
          </Form>
        </div>
      </div> 
  )
}

const formatYmd = (date) => {
  let y = date.getFullYear();
  let m = ('00' + (date.getMonth()+1)).slice(-2);
  let d = ('00' + date.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}