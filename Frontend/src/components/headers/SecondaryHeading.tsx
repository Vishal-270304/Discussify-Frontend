const SecondaryHeading : React.FC<{text:string,styles:React.CSSProperties}> = ({text,styles}) => {
    return (
        <h3 style={styles}>{text}</h3>
    )
}

export default SecondaryHeading