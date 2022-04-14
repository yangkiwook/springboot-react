import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

export default function List({ boards, setBoards }) {

  const navigate = useNavigate();
  const [ categorySort, setCategorySort ] = useState('▼');
  const [ registrationDateSort, setRegistrationDateSort ] = useState('▼');
  const [ searchSelVal, setSearchSelVal ] = useState('category');
  const [ searchTexVal, setSearchTexVal ] = useState('');
  const [ checkList, setCheckList ] = useState([])
  const [ idList, setIdList ] = useState([])

  useEffect(() => {
    let ids = [];
    boards.map((board, i) => {
       ids[i] = board.id;
       return ids;
    })
    
    setIdList(ids)
 }, [boards])

  const viewBoard = (id) => {
    navigate({
      pathname: "/detail",
      search: `?id=${ id }`
    });
  }

  const categoryBtn = () => {

    let newArray = [ ...boards ];
    
    if(categorySort === '▲') {
      newArray.sort(function(a, b) { 
        return a.category > b.category ? -1 : a.category < b.category ? 1 : 0;  // 降順
      });
      setCategorySort('▼');
    }else{
      newArray.sort(function(a, b) { 
        return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;  // 昇順
      });
      setCategorySort('▲');
    }
    setBoards(newArray);
  }

  const registrationDateBtn = () => {

    let newArray = [ ...boards ];
    
    if(registrationDateSort === '▲') {
      newArray.sort(function(a, b) { 
        return a.registrationDate > b.registrationDate ? -1 : a.registrationDate < b.registrationDate ? 1 : 0;  // 降順
      });
      setRegistrationDateSort('▼');
    }else{
      newArray.sort(function(a, b) { 
        return a.registrationDate < b.registrationDate ? -1 : a.registrationDate > b.registrationDate ? 1 : 0;  // 昇順
      });
      setRegistrationDateSort('▲');
    }
    setBoards(newArray);
  }

  const searchBtn = () => {

    let newArray = [ ...boards ];

    if(searchSelVal === "category"){ // カテゴリ
      newArray.filter((board) => {
        return board.category.indexOf(searchTexVal) !== -1 ? board.viewflg = 0 : board.viewflg = 1;
      });
    }else if(searchSelVal === "content"){ // 内容
      newArray.filter((board) => {
        return board.content.indexOf(searchTexVal) !== -1 ? board.viewflg = 0 : board.viewflg = 1;
      });
    }else { // 登録者
      newArray.filter((board) => {
        return board.registered.indexOf(searchTexVal) !== -1 ? board.viewflg = 0 : board.viewflg = 1;
      });
    }
    setBoards(newArray);
  }

  const deleteBoard = () => {
    setBoards(
      boards.filter(board => !checkList.includes(board.id))
    )
  }

  const onChangeAll = (e) => {
    console.log(idList);
    setCheckList(e.target.checked ? idList : [])
 }

 const onChangeEach = (e, id) => {
    if (e.target.checked) {
       setCheckList([...checkList, id]);
    } else {
       setCheckList(checkList.filter((checkedId) => checkedId !== id));
    }
 }
  
  // eslint-disable-next-line
  const renderDatas = boards.map(board => {
    if(board.viewflg === 0){
      return (
        <div className="divTableRow onmouseover" key={ board.id } onClick={() => { viewBoard(board.id) }}>
          <div className="divTableCell" onClick={(e) => { e.stopPropagation() }}>
            <Form.Check type="checkbox" checked={ checkList.includes(board.id) } onChange={(e) => onChangeEach(e, board.id)} /></div>
          <div className="divTableCell" >{ board.id }</div>
          <div className="divTableCell" >{ board.category }</div>
          <div className="divTableCell content" >{ board.content }</div>
          <div className="divTableCell" >{ board.registered }</div>
          <div className="divTableCell" >{ board.registrationDate }</div>
          <div className="divTableCell" >{ board.recommend }</div>
        </div>
      )
    }
  })

  return (
    <div className="container-div">
      <div className="menu-div">
        <p className="menu-p">掲示板一覧</p>
        <span>
          <Button variant="secondary" onClick={() => deleteBoard() }>削除</Button>&nbsp;
          <Link to="/write">
            <Button variant="success" >作成</Button>
          </Link>
        </span>
        <div className="search-div">
        <Form className='d-flex'>
          <Form.Group controlId="searchSelect">
            <Form.Select size="sm" onChange={(e) => { setSearchSelVal(e.target.value) }}>
              <option value="category">カテゴリ</option>
              <option value="content">内容</option>
              <option value="registered">登録者</option>
            </Form.Select>&nbsp;
          </Form.Group>
          <Form.Group controlId="searchText">
            <Form.Control size="sm" type="text" value={ searchTexVal } onChange={(e) => { setSearchTexVal(e.target.value) }}/>
          </Form.Group>
          <Button variant="danger" size="sm" onClick={() => { searchBtn() }} >🔍︎</Button>
        </Form>
        </div>
      </div>
      <div className="content-div">
        <div className="divTable">
          <div className="divTableHeading">
            <div className="divTableRow">
            <div className="divTableHead checkbox">
              <Form.Check type="checkbox" onChange={ onChangeAll } checked={ checkList.length === idList.length} /></div>
            <div className="divTableHead no">No</div>
            <div className="divTableHead category" 
                onClick={() => { categoryBtn() }} 
                style={{ cursor: 'pointer' }}>カテゴリ { categorySort }</div>
            <div className="divTableHead content">内容</div>
            <div className="divTableHead registered">登録者</div>
            <div className="divTableHead registrationDate" 
                onClick={() => { registrationDateBtn() }} 
                style={{ cursor: 'pointer' }}>登録日 { registrationDateSort }</div>
            <div className="divTableHead recommend">👍</div>
            </div>
          </div>
          <div className="divTableBody">
            { renderDatas }
          </div>
        </div>
      </div>
      <div className="footer-div">
        {/* <Pagination size="sm">
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination> */}
      </div>
    </div>  
  )
}

