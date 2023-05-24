import React, { useState } from "react";
import {MDBContainer } from "mdb-react-ui-kit";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";

const QRdecoder=()=>{

    const [image, setImage] = useState();
    const [disableBut, setDisableBut] = useState(1);
    const [text, setText] = useState();
    const [data, setData] = useState();


    const ProfileInput=(e)=>{

        // converting into dataurl
        // const reader = new FileReader();
        //         reader.readAsDataURL(e.target.files[0]);
        //         reader.onload = () =>{
        //         setData(reader.result);
        //     }


        const isDataAvailable = e.target.files[0];
        
        if(isDataAvailable){
            setDisableBut(0);
        }


        const reader = new FileReader();
                reader.readAsArrayBuffer(e.target.files[0]);
                reader.onload = () =>{ 
                setData(reader.result);
            }
        
        setImage(URL.createObjectURL(e.target.files[0]));

    }


    const DecodeImage = async() =>{
        setText('');

        try {
            
            axios(
                {
                    method:'post', 
                    url:`https://aio-4l6a.onrender.com/qrdecode`,
                    data: data,
                    headers: { "Content-Type": `image/*`, }
                }).then((data)=>{
                    if(data.status===200){
                        toast.success('Decoded successfully scroll down', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme:"dark"
                            });
                        setText(data.data.message);
                    }
                }).catch((err)=>{
                    if(err.response.status===404){
                        toast.error('QR Image Only', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme:"dark"
                            });
                        }
                })
               
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <>
            <Helmet>
                <title>AllInOne - qrdecode</title>
                <meta name="description" content="you can decode any qr code" />
            </Helmet> 
        <MDBContainer className="my-4">
            <h1 className="text-center">QR Decoder</h1>
            <div className="text-center">
                <div className="parent-div">
                    <button class="btn-upload">Choose file</button>
                    <input type="file" name="upfile" accept="image/png, image/gif, image/jpeg" onChange={ProfileInput} />
                </div>
            </div>
            <br />
            <div className="text-center">
                <img className="round-circle" src={image?image:process.env.PUBLIC_URL+"dummy.jpg"} alt="pic" />  
            </div>
            <div className="text-center">
                <button onClick={DecodeImage}  className={disableBut?"button_disable":"button"} disabled={disableBut}>Decode</button>
            </div>
            <h6 className="mx-auto w-50 text-center">{text}</h6>
        </MDBContainer>
        <ToastContainer />
        </>
    )
}

export default QRdecoder;