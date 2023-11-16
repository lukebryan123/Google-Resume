function AdditionalDetails(additionalDetailsProps) {
    const resultIdx = additionalDetailsProps.additionalDetailsProps.id
    const bool = additionalDetailsProps.additionalDetailsProps.showAdditionalDetails;
    const list = additionalDetailsProps.additionalDetailsProps.additionalDetails;
    if (bool) {

        return <div className="additional-details">
            <p className="additional-details-left">
                {list.map((item, index) => (
                    <a key={'adl' + resultIdx + '-' + index} target="_blank" title={item.linkTitle} href={item.href} dangerouslySetInnerHTML={{__html: item.leftText + "<br>"}}></a>
                ))} 

            </p>
            <p className="additional-details-right">
                {list.map((item, index) => (
                    <span key={'adm' + resultIdx + '-' + index}>{item.middleText}<br></br></span>
                ))} 
               
            </p>
            <p className="additional-details-right">
                {   list.map((item, index) => (
                    <span key={'adr' + resultIdx + '-' + index}>{item.rightText}<br></br></span>
                ))} 
  
            </p>
        </div>
    }
}

export default AdditionalDetails;