import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from '../components/sidebar/Sidebar'
import api from '../axiosContact'

function CreateSAQPage() {

    const navigate = useNavigate();

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [duration, setDuration] = useState()
    const [errors, setErrors] = useState([])
    
    const validate = () => {
        let errors = {}

        //name
        if(!name) {
            errors.name = 'Name required'
        }

        //description
        if(!description) {
            errors.description = 'Description required'
        }

        //duration
        if(!duration) {
            errors.duration = 'Duration required'
        } else if (isNaN(duration)) {
            errors.duration = 'Duration is invalid'
        }

        return errors;
    }

    const createSAQ = (e) => {
        e.preventDefault();
        const isValid = validate();

        if(isValid.name || isValid.description || isValid.duration) {
            setErrors(isValid);
        } else {
            api.post('/questionnaire/create', {
                name: name,
                description: description,
                duration: duration,
                type: 'shortQ'
            }).then((result) => {
                if (result.data) {
                    const id = result.data.id;
                    navigate(`/createQuestionPage/${id}`)
                } else {
                   console.log(result); 
                }
            }).catch((error) => {
                console.error("Error:", error );
            })
        }

    }

    
  return (
    <>
    <NavbarComponent/>
    <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
        <Sidebar/>
        <div className='main-con'>
            <div className="bg-txt-con" style={{width: "100%"}}>Create Short Answer Questionnaries </div>
            <Container  style={{width: "100%", padding: 0}}>
                <Row className='pt-3'>
                    <Col>
                        <div style={{display: "flex", with:"100%", flexDirection:"column"}}>
                            <Form 
                                style={{width: "100%"}}
                                // onSubmit={onFormSubmit}
                            >
                                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label column md={4}>Questionnarie Name</Form.Label>
                                    <Col size="lg">
                                        <Form.Control
                                            type="text"
                                            placeholder=""
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                setErrors({...errors, name: ''});
                                            }}
                                        />
                                        {errors.name && <p style={{color: 'rgb(208,0,0)'}}>{errors.name}</p>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label column md={4}> Description</Form.Label>
                                    <Col size="lg">
                                        <Form.Control
                                            style={{height: "100px"}}
                                            placeholder=""
                                            type="textarea"
                                            value={description}
                                            onChange={(e) => {
                                                setDescription(e.target.value);
                                                setErrors({...errors, description: ''});
                                            }}
                                        />
                                        {errors.description && <p style={{color: 'rgb(208,0,0)'}}>{errors.description}</p>}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                                    <Form.Label column md={4}> Duration</Form.Label>
                                    <Col size="lg">
                                        <Form.Control
                                            placeholder=""
                                            type="number"
                                            value={duration}
                                            onChange={(e) => {
                                                setDuration(e.target.value);
                                                setErrors({...errors, duration: ''});
                                            }}
                                        />
                                        {errors.duration && <p style={{color: 'rgb(208,0,0)'}}>{errors.duration}</p>}
                                    </Col>
                                </Form.Group>
                                <div className='btn-con'>
                                    <Button variant="primary" type='submit' onClick={createSAQ}>Save Changes</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
        
    </div>
    
    </>
    
  )
}

export default CreateSAQPage
