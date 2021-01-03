import Link from "next/link";
const Footer = () => {
    const footer= [
         {id:1, name:"Home", path:"/"},
         {id:2, name:"About", path:"about"},
         {id:3, name:"Blogs", path:"blogs"},
         {id:4, name:"Contact", path:"contact"}];
    
    return(
        <>
            <div className="fotter-wrapper">
                <ul className="list-inline"> 
                    {
                        footer.map((f) => (
                            <li className="flot-left" key={f.id}>
                                <Link href={f.path} as={f.path}><a className="f_link" href={f.path}>{f.name}</a></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <style jsx >{`
            ul{
                text-align: center;
                margin: 0 auto;
                width: 39%;
            }
                li.flot-left {
                    float: left;
                    padding: 14px;
                    font-size:12px;
                    
                }
                li a.f_link{
                    color:#000;
                }
                .portfolio {
                    color: #0b91e2;
                    font-size: 24px;
                    padding: 10px;
                    font-family: sans-serif;
                }
                .fotter-wrapper {
                    border-top: 1px solid #ccc;
                    margin: 50px 0;
                }
            `}</style>
        </>
    );
}
export default Footer;