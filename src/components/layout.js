import Navbar from "./navbar";

import Footer from "./footer";


export default function Layout({children, user}) {
   
    return (
        <>

            <Navbar user={user}/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}