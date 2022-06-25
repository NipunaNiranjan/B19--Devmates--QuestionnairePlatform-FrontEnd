import React, { useEffect,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Navbar from '../components/navbar/NavbarComponent';
import Sidebar from '../components/sidebar/Sidebar';
import { IoMdTrash } from "react-icons/io";
import api from '../axiosContact';

export default function SavedPdfPage () {

    const {id} = useParams();

    const [files, setFiles] = useState([]);

    useEffect(() => {
        getFiles();
    }, [])  

    const getFiles = async () => {
        const res = await api.get(`/files/${id}`);
        if(res.data) {
            console.log(res.data);
            setFiles(res.data);
        } else {
            console.log(res);
        }
    }

    const deleteFile = async (fqId) => {
        const res = await api.delete(`/files/${fqId}`);
        if(res.data) {
            getFiles();
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
                    <Row className="justify-content-md-center">
                        <Col xs lg="10">
                            <Table borderless hover>
                                <thead>
                                    <tr>
                                        {/* <th>Descriptive Name</th> */}
                                        <th>Uploaded File Name</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        files.length > 0 ? (
                                            files.map((file) => (
                                                <tr key={file.fqid}>
                                                    <td>{file.fileName}</td>
                                                    <td className='tblOption'>
                                                        <Button className='iconBtn' onClick={(e) => {deleteFile(file.fqid)}}><IoMdTrash /></Button></td>
                                                </tr>
                                            ))
                                        ) : <div>No Uploaded files</div>
                                    }



                                    {/* <tr>
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
                                    </tr> */}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}