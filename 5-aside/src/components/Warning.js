import React from 'react';
import { Button, Alert } from "react-bootstrap";


const Warning = ({ warning, handleAcceptWarning }) => (  
    
   <Alert dismissable="true">
       <p>{ warning }</p>
       <Button onClick={ handleAcceptWarning }>Ok</Button>
   </Alert>
)

export default Warning;