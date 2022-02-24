import React from 'react';
import { Button, Form, Pagination, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

export default function List({ boards }) {

  const navigate = useNavigate();

  const viewBoard = (index) => {
    navigate({
      pathname: "/detail",
      search: `?no=${ index }`,
      state: { fromPopup: true }
    });
  }

  const renderDatas = boards.map((board, index) => {
    index = index + 1
    return (
        <div className="divTableRow onmouseover" key={ index } onClick={() => { viewBoard(index) }}>
          <div className="divTableCell"><Form.Check type="checkbox" /></div>
          <div className="divTableCell">{ index }</div>
          <div className="divTableCell">{ board.category }</div>
          <div className="divTableCell content">{ board.content }</div>
          <div className="divTableCell">{ board.registered }</div>
          <div className="divTableCell">{ board.registrationDate }</div>
          <div className="divTableCell">{ board.recommend }</div>
        </div>
    )
  })

  return (
      <div className="container-div">
        <div className="menu-div">
          <p className="menu-p">掲示板一覧</p>
          <span>
            <Button variant="secondary" >削除</Button>&nbsp;
            <Link to="/write">
              <Button variant="success" >作成</Button>
            </Link>
          </span>
          <div className="search-div">
          <Form className='d-flex'>
            <Form.Group controlId="searchSelect">
              <Form.Select size="sm">
                <option value="1">カテゴリ</option>
                <option value="2">内容</option>
                <option value="2">登録者</option>
              </Form.Select>&nbsp;
            </Form.Group>
            <Form.Group controlId="searchText">
              <Form.Control size="sm" type="text" />
            </Form.Group>
            <Button variant="danger" size="sm" >🔍︎</Button>
          </Form>
          </div>
        </div>
        <div className="content-div">
          <div className="divTable">
            <div className="divTableHeading">
              <div className="divTableRow">
              <div className="divTableHead checkbox"><Form.Check type="checkbox" /></div>
              <div className="divTableHead no">No</div>
              <div className="divTableHead category">カテゴリ ▼</div>
              <div className="divTableHead content">内容</div>
              <div className="divTableHead registered">登録者</div>
              <div className="divTableHead registrationDate">登録日 ▼</div>
              <div className="divTableHead recommend">👍</div>
              </div>
            </div>
            <div className="divTableBody">
              { renderDatas }
            </div>
          </div>
        </div>
        <div className="footer-div">
          <Pagination size="sm">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>  
  )
}

