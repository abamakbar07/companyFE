import React, { useContext, useState } from 'react'
import { Modal } from "react-bootstrap";

import { ModalContext } from '../../components/context/ModalContext';

import Auth from './auth/Auth'
import Login from './login/Login'
import Signup from './signup/Signup'
import LoginButton from './components/LoginButton'

const LandingPage = () => {
  const [stateModal, dispatchModal] = useContext(ModalContext)
  const [show, setShow] = useState(false);

  const handleClose = () => {
    if (!stateModal.OTP) setShow(false)
    dispatchModal({
      type: "CLOSE_SIGNIN_SIGNUP",
    });
  };

  const handleShow = () => {
    setShow(true);
  }

   return (
     <div className="landingpage">
       {JSON.stringify(stateModal)}
       <div style={{ zIndex: 0 }}>
         <LoginButton handleShow={handleShow} />
       </div>

       <div className="landingpageModal" style={{ zIndex: 1000 }}>
         <Modal show={show} onHide={handleClose}>
           <Modal.Body className="p-0">
             {/* <Auth /> */}
             {stateModal.signin ? <Login /> : stateModal.signup ? (<Signup />) : (<div></div>)}
           </Modal.Body>
         </Modal>
       </div>
     </div>
   );
}

export default LandingPage
