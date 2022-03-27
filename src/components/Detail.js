import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useSearchParams  } from 'react-router-dom'
 
function Detail({ boards }) {

  const [ searchParams ] = useSearchParams();
  const no = searchParams.get('no')-1;
  const navigate = useNavigate();

    return(
        <div className="container-div">
        <div className="menu-div">
          <p className="menu-p">掲示板詳細</p>
        </div>
        <div className="write-div">
          <Form>
            <Form.Group className="mb-3" controlId="categoryVal">
              <Form.Label>カテゴリ</Form.Label>
                <Form.Select value={ boards[no].category } disabled >
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
              <Form.Control as="textarea" value={ boards[no].content } rows={3} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registeredVal">
              <Form.Label>登録者</Form.Label>
              <Form.Control type="text" value={ boards[no].registered } disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registrationDateVal">
              <Form.Label>登録日</Form.Label>
              <Form.Control type="date" value={ boards[no].registrationDate } disabled />
            </Form.Group>
            <div className="btn-div">
              <Button variant="secondary" size="lg" onClick={() => navigate(-1) } >戻る</Button>&nbsp;
              <Button variant="primary" size="lg" >編集</Button>
            </div>
          </Form>
        </div>
      </div> 
    )
}
 
export default Detail;
