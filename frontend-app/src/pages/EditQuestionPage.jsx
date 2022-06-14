import React, { useState, useEffect } from 'react'
import { Container, Button } from "react-bootstrap";
import {useParams, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from '../components/sidebar/Sidebar'
import api from '../axiosContact'

export default function EditQuestionPage() {

    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState()
    const [question, setQuestion] = useState()
    const [questionnaireID, setQuestionnaireID] = useState()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        api.get(`/questions/getQuestionById/${id}`)
        .then((result) => {
            if (result.data) {
                setName(result.data.name);
                setQuestion(result.data.question);
                setQuestionnaireID(result.data.questionnaireId);
            } else {
               console.log(result); 
            }
        }).catch((error) => {
            console.error("Error:", error );
        })
    }, [id])
    
    
    const validate = () => {
        let errors = {}

        //name
        if(!name) {
            errors.name = 'Descriptive Name required'
        }

        //description
        if(!question) {
            errors.question = 'Question Content required'
        }

        return errors;
    }

    const editSAQuestion = (e) => {
        e.preventDefault();
        const isValid = validate();

        if(isValid.name || isValid.question) {
            setErrors(isValid);
        } else {
            api.put(`/questions/updateQuestion/${id}`, {
                questionnaireId: questionnaireID,
                name: name,
                question: question,
            }).then((result) => {
                if (result.data) {
                    navigate(`/viewQuestionsPage/${questionnaireID}`)
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
                <Container  style={{width: "100%", padding: "10%"}}>
                    <div style={{}}>
                        <Form style={{width: "100%"}}>
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <Form.Label column md={4}>Descriptive Name</Form.Label>
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
                            </Form.Group>
                        

                        {/* <Form style={{width: "100%"}}> */}
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <Form.Label column md={4}>Question Content</Form.Label>
                                <Form.Control 
                                style={{height: "100px"}} 
                                placeholder="" 
                                type="textarea"
                                value={question}
                                onChange={(e) => {
                                    setQuestion(e.target.value);
                                    setErrors({...errors, question: ''});
                                    }}
                                {...errors.question && <p style={{color: 'rgb(208,0,0)'}}>{errors.question}</p>}
                                />
                            </Form.Group>
                        {/* </Form> */}
                        </Form>
                        <div className='btn-con d-flex justify-content-between'>
                            <Button variant="primary" style={{minWidth: "100px"}} onClick={editSAQuestion}>Edit Question</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    </>
  )
}

