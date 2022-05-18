import React from "react";
import {Route, Routes} from "react-router-dom";
import BarCode from "./BarCode";
import Home from "./Home";
import Image from "./Image";
import QR from "./QR";
import UrlShort from "./UrlShort";
import IconConverter from "./Images/IconConverter";
import QRgenerator from "./Qr/QRgenerator";
import QRdecoder from "./Qr/QRdecoder";
import ResizeImage from "./Images/ResizeImage";
import JpegToJpg from "./Images/JpegToJpg";
import JpegToPng from "./Images/JpegToPng";
import JpgToJpeg from "./Images/JpgToJpeg";
import JpgToPng from "./Images/JpgToPng";
import PngToJpeg from "./Images/PngToJpeg";
import PngToJpg from "./Images/PngToJpg";

const Navs=()=>{
    return (
        <>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/image" element={<Image/>}/>
            <Route path="/iconconvert" element={<IconConverter/>}/>
            <Route path="/resize" element={<ResizeImage/>}/>
            <Route path="/jpegtojpg" element={<JpegToJpg/>}/>
            <Route path="/jpegtopng" element={<JpegToPng/>}/>
            <Route path="/jpgtojpeg" element={<JpgToJpeg/>}/>
            <Route path="/jpgtopng" element={<JpgToPng/>}/>
            <Route path="/pngtojpeg" element={<PngToJpeg/>}/>
            <Route path="/pngtojpg" element={<PngToJpg/>}/>
            <Route path="/qrgenerator" element={<QRgenerator/>}/>
            <Route path="/qrdecoder" element={<QRdecoder/>}/>
            <Route exact path="/qrcode" element={<QR/>}/>
            <Route path="/barcode" element={<BarCode/>}/>
            <Route path="/urlshort" element={<UrlShort/>}/>
        </Routes>
        </>
    )
}
export default Navs;