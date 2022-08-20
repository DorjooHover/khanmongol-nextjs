import Navbar from "./navbar";
import {Center} from '@chakra-ui/react'
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <>

                <Navbar/>

            <main>{children}</main>
            <Footer/>
        </>
    )
}