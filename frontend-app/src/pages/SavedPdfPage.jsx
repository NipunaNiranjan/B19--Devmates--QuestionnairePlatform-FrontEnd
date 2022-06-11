import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Navbar from '../components/navbar/NavbarComponent';
import Sidebar from '../components/sidebar/Sidebar';
import { IoMdTrash } from "react-icons/io";

export default function SavedShortAnswerPage () {
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
                                        <th>File</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chache</td>
                                        <td className='pdfTblData'>cache.pdf</td>
                                        <td className='tblOption'><Button className='iconBtn'><IoMdTrash /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td className='pdfTblData'>name.pdf</td>
                                        <td className='tblOption'><Button className='iconBtn'><IoMdTrash /></Button></td>
                                    </tr>
                                    <tr>
                                        <td>Age</td>
                                        <td className='pdfTblData'>age.pdf</td>
                                        <td className='tblOption'><Button className='iconBtn'><IoMdTrash /></Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}