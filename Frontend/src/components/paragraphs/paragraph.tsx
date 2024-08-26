import {Link} from "react-router-dom"

const SmallText : React.FC<{text:string,link:string,linkText:string}> = ({text,link,linkText}) => {
    return (
        <p style={{fontSize:"12px"}}>{text} <Link to={link}>{linkText}</Link></p>
    )
}

export default SmallText    