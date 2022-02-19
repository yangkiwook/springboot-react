import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Pagination } from "react-bootstrap";

function App() {

  return (
    <div className="App">
      <div className="title-div">
        <div>石田チームプロジェクト</div>
      </div>
      <div className="container-div">
        <div className="header-div">
          <div className="login-div">
            <Button variant="light" >Sign in</Button>
          </div>
          <p className="menu-p">掲示板一覧</p>
          <span>
            <Button variant="secondary" >削除</Button>&nbsp;
            <Button variant="success" >作成</Button>
          </span>
          <div className="search-div">
          <Form className='d-flex'>
            <Form.Select size="sm">
              <option value="1">カテゴリ</option>
              <option value="2">内容</option>
              <option value="2">登録者</option>
            </Form.Select>&nbsp;
            <Form.Control size="sm" type="text" />
            <Button variant="danger" size="sm" >🔍︎</Button>
          </Form>
          </div>
        </div>
        <div className="content-div">
          <div className="divTable">
            <div className="divTableHeading">
              <div className="divTableRow">
              <div className="divTableHead chk"><Form.Check type="checkbox" /></div>
              <div className="divTableHead no">No</div>
              <div className="divTableHead cate">カテゴリ ▼</div>
              <div className="divTableHead cont">内容</div>
              <div className="divTableHead regi">登録者</div>
              <div className="divTableHead regiD">登録日 ▼</div>
              <div className="divTableHead recom">👍</div>
              </div>
            </div>
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell"><Form.Check type="checkbox" /></div>
                <div className="divTableCell">1</div>
                <div className="divTableCell">4g</div>
                <div className="divTableCell cont">テストテストテストテスト</div>
                <div className="divTableCell">チュンシク</div>
                <div className="divTableCell">2022/02/19</div>
                <div className="divTableCell">0</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Form.Check type="checkbox" /></div>
                <div className="divTableCell">1</div>
                <div className="divTableCell">4g</div>
                <div className="divTableCell cont">テストテストテストテスト</div>
                <div className="divTableCell">ライアン</div>
                <div className="divTableCell">2022/02/20</div>
                <div className="divTableCell">0</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Form.Check type="checkbox" /></div>
                <div className="divTableCell">1</div>
                <div className="divTableCell">4g</div>
                <div className="divTableCell cont">チュンシク会いたい</div>
                <div className="divTableCell">葉純</div>
                <div className="divTableCell">2022/02/20</div>
                <div className="divTableCell">0</div>
              </div>
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
    </div>
  );
}
export default App;

