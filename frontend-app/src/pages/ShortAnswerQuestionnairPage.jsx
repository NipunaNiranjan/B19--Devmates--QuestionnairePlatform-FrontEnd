import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Navbar from '../components/navbar/NavbarComponent';
import Sidebar from '../components/sidebar/Sidebar';
import { IoIosAdd, IoIosEye, IoMdTrash } from "react-icons/io";
import api from '../axiosContact';
import { Link } from 'react-router-dom';

export default function ShortAnswerQuestionnairPage () {

    const [questionnaire, setQuestionnaire] = useState([]);

    useEffect(() => {
        getQuestionnaire();
    }, [])

    const getQuestionnaire = async () => {
        const res = await api.get("/questionnaire/getQuestionnaire");
        if(res.data) {
            setQuestionnaire(res.data);
            console.log(res);

        }
    }

    const deleteQuestionnaire = async (qId) => {
        const res = await api.delete(`/questionnaire/deleteQuestionnaire/${qId}`);
        if(res.data) {
            getQuestionnaire();
        } else {
            console.log(res);
        }
    }

    return (
        <>
            <Navbar />
            <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
                <Sidebar />
                <Container fluid style={{ marginTop: "80px" }}>
                    {console.log(questionnaire)}
                    <Row className="justify-content-md-center">
                        <Col xs lg="10">
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Questionnaire</th>
                                        <th style={{width: '400px'}}>Description</th>
                                        <th  style={{width: '200px'}}>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {
                                        questionnaire && questionnaire.map((ques) => (
                                            <tr key={ques.id}>
                                                <td>{ques.name}</td>
                                                <td className='tblOption'><Button className='iconBtn' href='/viewQuestionsPage'><IoIosEye /></Button> <Button className='iconBtn' href='/createQuestionPage'><IoIosAdd size={20} /></Button> <Button className='iconBtn'><IoMdTrash /></Button></td>
                                            </tr>
                                        ))
                                    } */}
                                    {
                                        questionnaire.length > 0 ? (
                                            questionnaire.map((ques) => (
                                                <tr key={ques.id}>
                                                    <td>{ques.name}</td>
                                                    <td>{ques.description}</td>
                                                    <td className='tblOption'>
                                                        <Link to={`/viewQuestionsPage/${ques.id}`}>
                                                            <Button className='iconBtn'><IoIosEye /></Button>
                                                        </Link>
                                                        <Link to={`/createQuestionPage/${ques.id}`}>
                                                            <Button className='iconBtn'><IoIosAdd size={20} /></Button>
                                                        </Link>
                                                        <Button className='iconBtn' onClick={(e) => {deleteQuestionnaire(ques.id)}}><IoMdTrash /></Button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : <div>No questionnaire reports</div>
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}