import React,{ useState } from 'react';
import {MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {Helmet} from "react-helmet";

const ResizeImage=()=>{


    const [image, setImage] = useState();
    const [width, setWidth] = useState();
    const [currentWidth, setCurrentWdith] = useState();
    const [currentHeight, setCurrentHeight] = useState();
    const [height, setHeight] = useState();
    const [disableBut, setDisableBut] = useState(1);
    const [content, setContent] = useState(0);
    const [data, setData] = useState();



    const ProfileInput=(e)=>{
        setImage("")

        const isFileLoaded = e.target.files[0];
        setImage(URL.createObjectURL(e.target.files[0]));

        if(isFileLoaded){

            setDisableBut(0);
            setContent(1);
            setImage(URL.createObjectURL(e.target.files[0]));

            let img = new Image();
            img.src = window.URL.createObjectURL(e.target.files[0]);
            img.onload = () => {
                setWidth(img.width); 
                setCurrentWdith(img.width);
                setHeight(img.height);
                setCurrentHeight(img.height);
            }


            const reader = new FileReader();
            reader.readAsArrayBuffer(e.target.files[0]);
            reader.onload=()=>{
                setData(reader.result);
            }
        }
        
    }


    const Resize= async() =>{

        try {
            const convert = await axios(
                {
                    method:"post",
                    url:`https://allinoneapis.herokuapp.com/resizeimage?width=${width}&height=${height}`,
                    data:data
                }
            )
            console.log(convert);
            let image = 'data:image/x-icon;base64,' + convert.data;
            var a = document.createElement("a"); //Create <a>
            a.href = image; //Image Base64 Goes here
            a.download = "download.png"; //File name Here
            a.click(); //Downloaded file
            
        } catch (error) {
            console.log(error);
            
        }
    }




    return(
        <>
            <Helmet>
                <title>AllInOne - resize</title>
                <meta name="description" content="you can resize your image" />
            </Helmet>
            <MDBContainer className='my-4'>
                <h1 className='text-center'>Resize IMAGE</h1>
                <h4 className='text-center w-75 mx-auto mb-5'>
                    Resize <strong>JPG</strong>, <strong>PNG</strong>, <strong>SVG</strong> or <strong>GIF</strong> by defining new height and width pixels.
                    Change image dimensions in bulk.
                </h4>
                <MDBRow>
                    <MDBCol size='lg' sm={12} lg={6} md={6} className='col-example my-3'>
                        <div className="text-center">
                            <div className="parent-div mb-4">
                                <button class="btn-upload">Choose file</button>
                                <input type="file" name="upfile" accept="image/png, image/gif, image/jpeg" onChange={ProfileInput}/>
                            </div>
                            <br />
                            
                            {content?(
                                <>
                                <label htmlFor="">Width</label>
                                <input type="range" name="width" value={width} onChange={(e)=>setWidth(e.target.value)} min={0} max={1000} id="" />
                                <label htmlFor="" className='px-2'>{width} px</label>
                                <br />
                                <label htmlFor="">Height</label>
                                <input type="range" name="height" value={height} onChange={(e)=>setHeight(e.target.value)} min={0} max={1000} id="" />
                                <label htmlFor="" className='px-2'>{height} px</label>

                                </>
                            ):(
                                <>
                                </>
                            )}
                            <br />
                            <button onClick={Resize}  className={disableBut?"button_disable":"button"} disabled={disableBut}>Resize</button>
                        </div>
                    </MDBCol>
                    <MDBCol size='lg' sm={12} lg={6} md={6} className='col-example my-3'>
                        <div className="text-center">
                            {currentHeight?(
                                <>
                                    <label htmlFor="" className='my-2'>{currentWidth}x{currentHeight} ➡️ {width}x{height}</label><br/>

                                </>
                            ):(
                                <>
                                </>
                            )}
                            <img className="icon-dummy-image"  src={image?image:process.env.PUBLIC_URL+"dummy.jpg"} alt="pic" />  
                        </div>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </>
    )
}

export default ResizeImage;