import React, { useEffect,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Navbar from '../components/navbar/NavbarComponent';
import Sidebar from '../components/sidebar/Sidebar';
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import api from '../axiosContact';


export default function ViewQuestionsPage () {

    const {id} = useParams();

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    }, [])  

    const getQuestions = async() => {
        const res = await api.get(`/questions/getQuestion/${id}`);
        if(res.data) {
            let arr = [];
            arr.push(res.data);
            setQuestions(arr);
            console.log(questions);
        }
    }

    return (
        <>
            <Navbar />
            <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
                <Sidebar />
                <Container fluid style={{ marginTop: "80px" }}>
                    <Row className="justify-content-md-center">
                        <Col xs lg="10">
                            <Table borderless hover>
                                <thead>
                                    <tr>
                                        <th>Descriptive Name</th>
                                        <th>Question</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {
                                    questions.length > 0 ? (
                                        questions.map((question) => (
                                                <tr key={question.id}>
                                                    <td>{question.name}</td>
                                                    <td>{question.question}</td>
                                                    <td className='tblOption'>
                                                        <Link to={`/createSAQPage/${question.id}`}>
                                                            <Button className='iconBtn'><IoMdCreate size={20} /></Button>
                                                        </Link>
                                                        <Button className='iconBtn'><IoMdTrash /></Button></td>
                                                </tr>
                                            ))
                                        ) : <div>waiting</div>
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