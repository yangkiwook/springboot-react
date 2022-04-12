import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useSearchParams  } from 'react-router-dom'
 
function Detail({ boards, setBoards }) {

  const navigate = useNavigate();
  const [ searchParams ] = useSearchParams();
  const board = boards.find(element => element.id === parseInt(searchParams.get('id')));
  const [ categoryVal, setCategoryVal ] = useState(board.category);
  const [ contentVal, setContentVal ] = useState(board.content);
  const [ registeredVal, setRegisteredVal ] = useState(board.registered);
  const [ registrationDateVal, setRegistrationDateVal ] = useState(board.registrationDate);
  let recommend = board.recommend;
  const [ disabled, setDisabled ] = useState(true);
  const [ btnN, setBtnN ] = useState("編集");

  useEffect(()=>{
    
  },[])
  const updateBtn = (id) => {
    setDisabled(false);
    setBtnN("確認");
    if(btnN === "確認") {
      updateBoard(id);
      navigate("/");
    }
  }

  const addRecommend = (id) => {
    recommend = recommend +1 
    updateBoard(id);
  }

  const updateBoard = (id) => {
    setBoards(boards.map(board => board.id === id ? {
      ...board, 
        category : categoryVal,
        content : contentVal,
        registered : registeredVal,
        registrationDate : registrationDateVal,
        recommend : recommend,
    } : board))
  }

    return(
      <div className="container-div">
        <div className="menu-div">
          <p className="menu-p">掲示板詳細</p>
        </div>
        <div className="write-div">
          <Form>
            <Form.Group className="mb-3" controlId="categoryVal">
              <Form.Label>カテゴリ</Form.Label>
                <Form.Select value={ categoryVal } disabled={ disabled } 
                  onChange={(e) => setCategoryVal(e.target.value)} >
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
              <Form.Control as="textarea" value={ contentVal } rows={3} disabled={ disabled } 
                onChange={(e) => setContentVal(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registeredVal">
              <Form.Label>登録者</Form.Label>
              <Form.Control type="text" value={ registeredVal } disabled={ disabled } 
                onChange={(e) => setRegisteredVal(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registrationDateVal">
              <Form.Label>登録日</Form.Label>
              <Form.Control type="date" value={ registrationDateVal } disabled={ disabled } 
                onChange={(e) => setRegistrationDateVal(e.target.value)} />
            </Form.Group>
            <div className="btn-div">
              <Button variant="outline-danger" size="lg" style={{ float:'left' }} 
                onClick={()=> addRecommend(board.id)}>❤ { recommend }</Button>
              <Button variant="secondary" size="lg" onClick={() => navigate("/") } >戻る</Button>&nbsp;
              <Button variant="primary" size="lg" onClick={() => updateBtn(board.id) }>{ btnN }</Button>
              
            </div>
          </Form>
        </div>
      </div> 
    )
}
 
export default Detail;
