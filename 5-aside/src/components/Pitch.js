import React, { Component } from 'react';
import { FormControl, InputGroup, Button, Form, Alert } from "react-bootstrap";

const Pitch = ({ children }) => (   
        <section className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div className="left" style={{ gridColumn }}>{ <Team/> }</div>
            <div className="left" style={{ gridColumn }}>{ <Team/> }</div>

            
        </section>
    )
    
    

export default Pitch;