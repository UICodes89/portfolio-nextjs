import Link from "next/link";
const Menu = () => {
    const nav= [
            {id:1, name:"Home",path:'/'},
            {id:2, name:"About", path:'about'},
            {id:3, name:"Blogs", path:'blogs'},
            {id:4, name:"Contact", path:'contact'}
        ];
    
    return(
        <>
            <div className="col-12 b-botttom">
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <a href="/" className="portfolio">MS</a>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <ul className="list-inline">
                                {
                                    nav.map((f) => (
                                        <li className="flot-left" key={f.id}>
                                            <Link href={f.path}>
                                                <a href={f.path}>{f.name}</a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                ul{
                    float: right !important;
                    width: 400px;
                    margin: 0 auto;
                }
                li.flot-left {
                    padding: 0px 16px;
                    display: inline-flex;
                }
                li a{
                    color: #000000;
                    text-decoration:none;
                    padding: 16px 0;
                }
                li a:hover{
                    color: #0b91e2;
                    text-decoration:none;
                    cursor:pointer;
                }
                .portfolio {
                    color: #000000;
                    font-size: 24px;
                    padding: 16px 0;
                    font-family: sans-serif;
                }
                .portfolio:hover{
                    text-decoration:none;
                }
                .b-botttom{
                    border-bottom: 1px solid #cccccc;
                    margin-bottom: 50px;
                }
            `}</style>
           
        </>
    )};

export default Menu;
