import React, { useState } from "react";
import {MDBContainer } from "mdb-react-ui-kit";
import "./qr.css";
import axios from 'axios';
import {Helmet} from "react-helmet";


const QRgenerator=()=>{

    const [text, setText] = useState();
    const [disableBut, setDisableBut] = useState(0);


    const createQR=async(e)=>{
        e.preventDefault();
        
        try {
            setDisableBut(1);
            const config = { responseType: 'blob' }
            const data = await axios.post(`https://allinoneapis.herokuapp.com/qrcreation?code=${text}`, config);
            let image = 'data:image/png;base64,' + data.data;
            var a = document.createElement("a"); //Create <a>
            a.href = image; //Image Base64 Goes here
            a.download = "Image.png"; //File name Here
            a.click(); //Downloaded file

            // console.log(image);
            // fileDownload(image, "download.png");
            // console.log(data.data);
            // var blob = new Blob([image], {type:"image/png"});
            // console.log(blob);
            // const url = window.URL.createObjectURL(blob);

            // const link = document.createElement('a');
            // link.href = url;
            // link.setAttribute(
            // 'download',
            // `download_filename.png`,
            // );
          

            //   // Append to html link element page
            //   document.body.appendChild(link);
          
            //   // Start download
            //   link.click();
          
            //   // Clean up and remove the link
            //   link.parentNode.removeChild(link);
            
            setDisableBut(0);
            setText("");
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <Helmet>
                <title>AllInOne - qrgenerator</title>
                <meta name="description" content="you can create any qr code" />
            </Helmet> 
        <MDBContainer className="my-4">
            <h1 className="text-center">QR Generator</h1>
            <div className="text-center">
                <form onSubmit={createQR}>
                    <textarea value={text} onChange={(e)=>setText(e.target.value)} 
                    className="text-center p-4" rows="10" cols="40" placeholder="Enter any text" 
                    required={true}>

                    </textarea>
                    <br />
                    <button type="submit" className={disableBut?"button_disable":"button"} disabled={disableBut}>Generate</button>
                </form>
            </div>
        </MDBContainer>
        </>
    )
}

export default QRgenerator;