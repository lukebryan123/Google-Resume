// import React from "react";
import SeeAlso from "./SeeAlso";
import AdditionalDetails from "./AdditionalDetails";
// import Search from './Search'

function Result(props) {
    const resultsJson = props.resultsJson;

    return <div className="search-result">
        <p className="search-result-location">{resultsJson.location}<span> {resultsJson.sublocation}</span></p>
        <a href={resultsJson.href} title={resultsJson.linkTitle} target="_blank"><h2>{resultsJson.header}</h2></a>
        <p className="search-result-content" >
            <span className="date">{resultsJson.date} —</span> 
            <span dangerouslySetInnerHTML={{__html: resultsJson.body}}></span>
        </p>
        <SeeAlso seeAlsoProps={resultsJson}/>
        <AdditionalDetails additionalDetailsProps={resultsJson}/>
        {/* <ul className="search-result-see-also">
            <li><a href="https://www.google.com/search?q=web+development">Web Development</a></li>
            <li><a href="https://www.google.com/search?q=AEM">AEM</a></li>
            <li><a href="https://www.google.com/search?q=User-Centered+Design">User-Centered Design</a></li>
            <li><a href="https://www.google.com/search?q=photoshop">Photoshop</a></li>
        </ul> */}
    </div> 
    
};



export default Result;
