import React from 'react';
import { Button, Alert } from "react-bootstrap";

const Warning = ({ message, warning, handleAcceptWarning }) => (  
   !warning ? null : (
    <div className="alert-contain">
    <Alert variant="danger" className="form-submit-alert">
      <Alert.Heading>Please check your players</Alert.Heading>
      <p>
        { message }
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={ handleAcceptWarning } variant="outline-success">
          Ok
        </Button>
      </div>
    </Alert>

  </div>
   )
)


export default Warning;