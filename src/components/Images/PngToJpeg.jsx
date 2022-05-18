import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import "./image.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";


const PngToJpeg=()=>{

    const [image, setImage] = useState();
    const [disableBut, setDisableBut] = useState(1);
    const [data, setData] = useState();

    const ProfileInput=(e)=>{
        setImage("")

        const isFileLoaded = e.target.files[0];
        console.log(isFileLoaded);
        if(isFileLoaded){
            if(isFileLoaded.type === "image/png"){

                setDisableBut(0);
                setImage(URL.createObjectURL(e.target.files[0]));

                const reader = new FileReader();
                reader.readAsArrayBuffer(e.target.files[0]);
                reader.onload=()=>{
                    setData(reader.result);
                }
                
            }
            else{
                toast.error('Png Format Image Only', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:"dark"
                    });
                setDisableBut(1);
                setImage("");
            }
        }
        
    }

    const convertIcon = async()=>{

        try {
            const convert = await axios(
                {
                    method:"post",
                    url:"https://allinoneapis.herokuapp.com/pngtojpeg",
                    data:data
                }
            )
            console.log(convert);
            let image = 'data:image/x-icon;base64,' + convert.data;
            var a = document.createElement("a"); //Create <a>
            a.href = image; //Image Base64 Goes here
            a.download = "download.jpeg"; //File name Here
            a.click(); //Downloaded file
            
        } catch (error) {
            console.log(error);
            
        }
    }




    return (
        <>
        <Helmet>
            <title>AllInOne - pngtojpeg</title>
            <meta name="description" content="you can convert your png image in jpeg" />
        </Helmet>
        <MDBContainer className="my-4">
            <h1 className="text-center">Png To Jpeg Converter</h1>
            <p className="text-center">Make sure you have <b>PNG</b> format image to convert into Jpeg.</p>
            <p className="text-center">Some of the JPG format won't work reason don't know</p>


            {/* box for writting message */}
            <MDBRow>
                <MDBCol size='lg' sm={12} lg={6} md={6} className='col-example my-3'>
                    <div className="text-center">
                        <div className="parent-div">
                            <button class="btn-upload">Choose file</button>
                            <input type="file" name="upfile" accept="image/png, image/gif, image/jpeg" onChange={ProfileInput}/>
                        </div>
                        <br />
                        <button onClick={convertIcon}  className={disableBut?"button_disable":"button"} disabled={disableBut}>Convert</button>
                    </div>
                </MDBCol>
                <MDBCol size='lg' sm={12} lg={6} md={6} className='col-example my-3'>
                    <div className="text-center">
                        <img className="icon-dummy-image" src={image?image:process.env.PUBLIC_URL+"dummy.jpg"} alt="pic" />  
                    </div>

                </MDBCol>
            </MDBRow>


        </MDBContainer>
        <ToastContainer/>
        </>
    )

}

export default PngToJpeg;