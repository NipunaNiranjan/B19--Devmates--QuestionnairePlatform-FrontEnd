import React from 'react'
import { Container, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from '../components/sidebar/Sidebar'

export default function CreateQuestionPage() {
  
  return (
    <>
        <NavbarComponent/>
        <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
            <Sidebar/>
            <div className='main-con'>
                <Container  style={{width: "100%", padding: "10%"}}>
                    <div style={{}}>
                        <Form style={{width: "100%"}}>
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <Form.Label column md={4}>Description Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Form>

                        <Form style={{width: "100%"}}>
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <Form.Label column md={4}>Question Content</Form.Label>
                                <Form.Control style={{height: "100px"}} placeholder="" type="textarea"/>
                            </Form.Group>
                        </Form>

                        <div className='btn-con d-flex justify-content-between'>
                            <Button variant="primary" style={{minWidth: "100px"}}>Finish and Submit</Button>
                            <Button variant="primary" style={{minWidth: "100px"}}>Next Question</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    </>
  )
}

