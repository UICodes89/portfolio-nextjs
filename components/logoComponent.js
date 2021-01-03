const TechLogo = (props) => {
    return(
        <>
            <img src={props.path} title={props.title}/>
            <style jsx >{`
               img{
                   width:100%;
                   max-width:100px;
                   padding:10px;
                   -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
                   filter: grayscale(100%);
               }
               img:hover{
                -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
                filter: grayscale(0%);
                cursor:pointer;
               }
            `}</style>
        </>
        
    )
};

export default TechLogo;