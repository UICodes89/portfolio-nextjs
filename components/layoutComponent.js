import Footer from "./footerComponent";
import  Menu from "./menuComponent";
const Layout = (props) => (
    <>
        <Menu></Menu>
        {props.children}
        <Footer></Footer>
    </>
);

export default Layout;