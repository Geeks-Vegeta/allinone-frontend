import React from "react";
import {NavLink} from "react-router-dom";
import {MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import {Helmet} from "react-helmet";



const AllContenct = [
   
    {
        title:"QR Generator",
        content:"Convert any thing in QR code and create a image for you.",
        image:"qr.png",
        alt:"qr gen",
        url:"/qrgenerator"


    },
    {
        title:"QR Decoder",
        content:"You can decode any QR code just in one click.",
        image:"qrscan1.png",
        alt:"qr decode",
        url:"/qrdecoder"

    }
]

const QR=()=>{
    return(
        <>
            <Helmet>
                <title>AllInOne - qr</title>
                <meta name="description" content="you can create or decode qr" />
            </Helmet>
        <MDBContainer fluid className="background-qr">
          <h3 className="text-center p-2 text-white">Every tool you need to work in one place</h3>
          <h4 className="text-center small-on-mob p-2 w-75 mx-auto text-white">Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</h4>
        </MDBContainer>
        <MDBContainer className="shadow-lg fixed-pos p-0 w-100">
           <MDBRow>
               {AllContenct.map((data, idx)=>{
                   return (
                       <>
                       <MDBCol sm="6" lg="3" md="4">
                           <NavLink exact to={data.url}>
                            <div className="small-card p-3 m-0 h-100" key={idx}>
                                <img src={process.env.PUBLIC_URL+data.image} className="mb-3" alt={data.alt} width="50" height="50" />
                                <h5 className="text-dark">{data.title}</h5>
                                <p className="text-dark">{data.content}</p>
                            </div>
                            </NavLink>
                        </MDBCol>
                       </>
                   )
               })}
           </MDBRow>

        </MDBContainer>
        </>
    )
}

export default QR;