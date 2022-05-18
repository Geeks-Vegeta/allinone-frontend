import React, {useState, useEffect} from "react";
import "./url.css";
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import {Helmet} from "react-helmet";


const UrlShort=()=>{

    const [url, setUrl] = useState();
    const [selectShortUrl, setSelectShortUrl] = useState("chilpit");
    const [allLinks, setAllLinks] = useState([]);

    useEffect(()=>{

        const getAllLinks = async() =>{
            try {

                let alllinks = await localStorage.getItem('allUrls');
                setAllLinks(JSON.parse(alllinks));
                
            } catch (error) {
                console.log(error);
                
            }

        }
        getAllLinks();

    },[])
   
    const createShortLink=async(e)=>{
        e.preventDefault();
        const {data} = await axios.post(`https://allinoneapis.herokuapp.com/shortlink?mode=${selectShortUrl}&link=${url}`);
        const create_link={
            "url":url,
            "short":data.url
        }
        let len_short_urls = await localStorage.getItem('allUrls');
        if(len_short_urls === null){
            setAllLinks([create_link]);
            localStorage.setItem('allUrls', JSON.stringify([create_link]));
            setUrl("")

        }else{
            setAllLinks((preval)=>{
                return [create_link, ...preval]
            })
            localStorage.setItem('allUrls', JSON.stringify(allLinks));
            setUrl("")

        }


    }


    return (
        <>
            <Helmet>
                <title>AllInOne - urlshort</title>
                <meta name="description" content="you can short your url" />
            </Helmet>
        <div className="headings m-5 text-center">
            <h3>Short links, big results</h3>
            <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
        </div>
        
            <form onSubmit={createShortLink}>
                <div className="form-short-link text-center">
                    <input value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="Shorten Your Link" type="url" name="" id="" required="true"/>
                        <select value={selectShortUrl} onChange={(e)=>setSelectShortUrl(e.target.value)} className="m-2" name="links" id="links">
                            <option value="tinyurl">tinyurl</option>
                            <option value="chilpit">chilpit</option>
                            <option value="osdb">osdb</option>
                            <option value="clckru">clckru</option>
                            <option value="dagd">dagd</option>
                        </select>

                    <button type="submit">Shorten</button>
                </div>
            </form>

        <div className="recent-short-links mx-auto">
            {allLinks?(
                <>
                    {allLinks.map((data, idx)=>{
                        return (
                            <>
                                <ul>
                                    <li>
                                        <div className="url">
                                            <span>{data.url.slice(0,50)}..</span>
                                        </div>
                                        <div className="short-url">

                                            <span>{data.short}</span>
                                           

                                                <CopyToClipboard text={data.short}
                                                
                                                onCopy={() =><p data-tip="hello world">Tooltip</p>
                                            }>
                                                <button>copy</button>
                                                </CopyToClipboard>
                                                <ReactTooltip />

                                        </div> 
                                    </li>
                                </ul>
                        </>
                        )
                    })}
                
                            
                    
                </>
            ):(
                <>
                    <h4 className="text-center p-5">No Short Links yet</h4>

                </>
            )}
           
        </div>

        </>
    )
}

export default UrlShort;