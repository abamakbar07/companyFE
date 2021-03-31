import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { ModalContext } from '../../../components/context/ModalContext';

const LoginButton = (props) => {
  const handleShow = props.handleShow
  const [stateModal, dispatchModal] = useContext(ModalContext)

  const getLogin = () => {
    dispatchModal({
      type: "SIGNIN"
    })
    handleShow()
  }

  const getSignup = () => {
    dispatchModal({
      type: "SIGNUP"
    })
    handleShow()
  }

   return (
     <div className="landingpageLoginButton d-block">
       <Button className="m-2" variant="primary" onClick={getLogin}>
         Login
       </Button>

       <Button className="m-2" variant="primary" onClick={getSignup}>
         Signup
       </Button>
     </div>
   );
}

export default LoginButton
