import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function Login() {

  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loginName, setLoginName ] = useState('');

  const [ loginBtn, setLoginBtn ] = useState({ display:'block' });
  const [ signoutBtn, setSignoutBtn ] = useState({ display:'none' });

  useEffect(() => {
    if(sessionStorage.length > 0) {

      setLoginName("ようこそ " + sessionStorage.getItem("userName") + "さん");
      setLoginBtn({ display:'none' });
      setSignoutBtn({ display:'block' });
    }else{
      setLoginName('');
      setLoginBtn({ display:'block' });
      setSignoutBtn({ display:'none' });
    }
  }, [setLoginName]);

  const signout = () => {
    sessionStorage.clear();
    setLoginBtn({ display:'block' });
    setSignoutBtn({ display:'none' });
    setLoginName('');
  }

  const onSubmit = (event) => {

    event.preventDefault();
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("password", password);

    setLoginName("ようこそ " + sessionStorage.getItem("userName") + "さん");

    setUserName('');
    setPassword('');
    setLoginBtn({ display:'none' });
    setSignoutBtn({ display:'block' });
    handleClose();
  }

  const [ show, setShow ] = useState( false );
  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );

  return (
    <>
    <div className="header-div">
      <div>SPRINGBOOT-REACT</div>
      <div style={{ position: 'absolute', top: '0px', left: '1200px', fontSize: '15px' }}>{ loginName }</div>
      <div className="login-div">
        <Button variant="light" onClick={ handleShow } style={ loginBtn }>Sign in</Button>
        <Button variant="outline-secondary" onClick={ signout } style={ signoutBtn }>signout</Button>
      </div>
    </div>
      <Modal show={ show } onHide={ handleClose } centered>
        <Form onSubmit={ onSubmit }>
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
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