import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( userName, password )
    setUserName('');
    setPassword('');
    handleClose();
  }

  const [ show, setShow ] = useState( false );
  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  return (
    <>
    <div className="header-div">
      <div>石田チームプロジェクト</div>
      <div className="login-div">
      <Button variant="light" onClick={ handleShow }>
        ログイン
      </Button>
      </div>
    </div>
      <Modal show={ show } onHide={ handleClose } centered>
        <Form onSubmit={ onSubmit }>
          <Modal.Header closeButton>
            <Modal.Title>ログイン</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>ユーザー名</Form.Label>
              <Form.Control type="text" value={ userName } onChange={ (e) => setUserName( e.target.value ) } />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>パスワード</Form.Label>
              <Form.Control type="password" value={ password } onChange={ (e) => setPassword( e.target.value ) } />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ handleClose }>
              閉じる
            </Button>
            <Button variant="primary" type="submit" >
              確認
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}