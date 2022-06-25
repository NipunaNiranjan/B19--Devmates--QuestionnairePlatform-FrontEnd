import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import api from "../axiosContact";
import { uploadFile } from "../axiosContact";
import FormData from "form-data";

function CreateFileUploadTypeQuestion() {

const formData = new FormData();
const { id } = useParams();
const navigate = useNavigate();

  

  const [file, setFile] = useState();
  function handleChange(e) {
    //console.log(e.target.files);
    setFile((e.target.files[0]));
    console.log((e.target.files[0])); 
    
  }


  //   const [file, setFile] = useState();
  //const [errors, setErrors] = useState([]);

  //   const validate = () => {
  //     let errors = {};

  //name
  // if(!name) {
  //     errors.name = 'Descriptive Name required'
  // }

  //file upload
  //     if (!file) {
  //       errors.file = "Uploded file required";
  //     }

  //     return errors;
  //   };

  const createSAQuestion = async(e) => {
    formData.append("file", file);
    formData.append("questionnaireId", id);
    try{
        const response = await uploadFile(formData);
        setFile('')
    //e.target.value=null;    
    console.log(response)
    if(response){
        alert("File uploaded successfully.")
    }
    }catch(error){
        //alert(error);
        if (error.response.status === 400) {
            console.log(`HTTP 400 error occured`);
          }
          // You can get response data (mostly the reason would be in it)
          if (error.response.data) {
            console.log(error.response.data);
          }
      
    }
    
    //e.preventDefault();
    // const isValid = validate();

    // if (isValid.file) {
    //   setErrors(isValid);
    // } else {
    //   var form = {
    //     questionnaireId: id,
    //     file: file,
    //   };
    //   let formData = new FormData();
    //   console.log("A", formData);
    //   Object.keys(form).forEach((key) => {
    //     formData.append(key, form[key]);
    //   });
    //   api
    //     .post("/upload", formData)
    //     .then((result) => {
    //       console.log("aaa");
    //       if (result.data) {
    //         setFile("");
    //       } else {
    //         console.log(result);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // }
  };

  const finishSAQ = () => {
    if (file) {
      createSAQuestion();
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <div className="main-con">
          <Container style={{ width: "100%", padding: "10%" }}>
            <div style={{}}>
              {/* <Form style={{width: "100%"}}>
                            <Form.Group className="mb-5" controlId="formBasicEmail">
                                <Form.Label column md={4}>Description Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Form> */}

              <Form
                style={{ width: "100%" }}
                name="updateForm"
                //onSubmit={(e) => createSAQuestion(e)}
                enctype="multipart/form-data"
              >
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <div>
                  <Form.Label column md={4}>
                    Upload your file here
                  </Form.Label>
                  </div>
                  {/* <Form.Control
                    name="myfile"
                    type="file"
                    // placeholder=""
                    value={file}
                    onChange={(e) => {
                      console.log("data", e);
                      setFile(e.target.value);
                      setErrors({ ...errors, file: "" });
                    }}
                    {...(errors.file && (
                      <p style={{ color: "rgb(208,0,0)" }}>{errors.file}</p>
                    ))}
                  /> */}

                  <input type="file" name="file" placeholder="" onChange={handleChange} />
                </Form.Group>

                {/* <Button
                  htmlType="submit"
                  variant="primary"
                  style={{ minWidth: "100px" }}
                  onClick={(e) => createSAQuestion(e)}
                >
                  Add File
                </Button> */}
              </Form>
              {/* <img src={file} /> */}

              <div className="btn-con d-flex justify-content-between">
                <Button
                  variant="primary"
                  style={{ minWidth: "100px" }}
                  onClick={finishSAQ}
                >
                  Finish and Submit
                </Button>

                <Button
                  htmlType="submit"
                  variant="primary"
                  style={{ minWidth: "100px" }}
                  onClick={(e) => createSAQuestion(e)}
                >
                  Add File
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default CreateFileUploadTypeQuestion;
