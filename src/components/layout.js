import Navbar from "./navbar";
import {Center} from '@chakra-ui/react'
export default function Layout({children}) {
    return (
        <>

                <Navbar/>

            <main>{children}</main>
        </>
    )
}