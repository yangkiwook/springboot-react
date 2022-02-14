import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {

  let title = { color : 'blue', fontSize : '30px' }

  return (
    <div className="App">
      <div className="title-nav">
        <div>石田チームプロジェクト</div>
      </div>
      <div className="container-div">
        <h4>メニュー</h4>
        <div className="content-div">
          <div className="write-div"><br/>
            <div className="position-div">
              <input type="search" placeholder={ "掲示板新規追加" }/>
                <Button variant="success" size="sm">追加</Button>
            </div>
          </div><br/>
          <div className="list-div">掲示板一覧
            <table>
              <tr className="position-div">
                <td><input type="search" placeholder={ "掲示板タイトル" }/>
                  <Button variant="success" size="sm">詳細</Button></td>
              </tr>
              <tr className="position-div">
                <td><input type="search" placeholder={ "掲示板タイトル" }/>
                  <Button variant="success" size="sm">詳細</Button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
