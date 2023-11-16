function SeeAlso(seeAlsoProps) {
    const resultIdx = seeAlsoProps.seeAlsoProps.id
    const bool = seeAlsoProps.seeAlsoProps.showSeeAlso;
    const list = seeAlsoProps.seeAlsoProps.seeAlso;
    if (bool) {
        return <ul className="search-result-see-also">
            {list.map((item, index) => (
                <li key={'sa-' + resultIdx + '-' + index}><a title={item.text} target="_blank" href={item.href}>{item.text}</a></li>
            ))}  
            {/* <li><a href="https://www.google.com/search?q=web+development">Web Development</a></li>
            <li><a href="https://www.google.com/search?q=AEM">AEM</a></li>
            <li><a href="https://www.google.com/search?q=User-Centered+Design">User-Centered Design</a></li>
            <li><a href="https://www.google.com/search?q=photoshop">Photoshop</a></li> */}
            {/* <!-- <li>AEM</li>
            <li>User-centered design</li>
            <li>Interactive data visulaization</li>
            <li>Photoshop</li> --> */} 
        </ul>
    }
    return <div></div>
}

export default SeeAlso;