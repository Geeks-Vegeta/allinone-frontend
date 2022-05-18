import React from "react";
import {NavLink} from "react-router-dom";
import {MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import {Helmet} from "react-helmet";


const AllContenct = [
    {
        title:"Icon Convert",
        content:"It will convert any png, jpg, jpeg file in ico format just in one click",
        image:"ico.png",
        alt:"ico",
        url:"/iconconvert"

    },
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

    },
    {
        title:"Resize Images",
        content:"Resize any image in any format just in one click.",
        image:"resize.jpg",
        alt:"resize",
        url:"/resize"

    },
    {
        title:"Jpeg To Jpg",
        content:"Convert Jpeg image to Jpg format just in one click.",
        image:"jpgicon.jpg",
        alt:"jpg",
        url:"/jpegtojpg"

    },
    {
        title:"Jpeg To Png",
        content:"Convert Jpeg image to Png format just in one click.",
        image:"png-icon.png",
        alt:"png",
        url:"/jpegtopng"

    },
    {
        title:"Jpg To Jpeg",
        content:"Convert Jpg image to Jpeg format just in one click.",
        image:"jpegicon.png",
        alt:"jpeg",
        url:"/jpgtojpeg"

    },
    {
        title:"Jpg To Png",
        content:"Convert Jpg image to Png format just in one click.",
        image:"png-icon.png",
        alt:"png",
        url:"/jpgtopng"

    },
    {
        title:"Png To Jpeg",
        content:"Convert Png image to Jpeg format just in one click.",
        image:"jpegicon.png",
        alt:"jpeg",
        url:"/pngtojpeg"

    },
    {
        title:"Png To Jpg",
        content:"Convert Png image to Jpg format just in one click.",
        image:"jpgicon.jpg",
        alt:"jpg",
        url:"/pngtojpg"

    },
    {
        title:"Short Url",
        content:"Convert Any Url in short link just in one click",
        image:"url4.png",
        alt:"url",
        url:"/urlshort"
    },


]

const Home=()=>{
    return(
        <>

    <Helmet>
        <title>AllInOne</title>
        <meta name="description" content="Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks." />
    </Helmet>
    
        <MDBContainer fluid className="home-gred">
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

export default Home;