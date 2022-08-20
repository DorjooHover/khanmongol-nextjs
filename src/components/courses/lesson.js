import { ChatIcon } from "@chakra-ui/icons"
import { HStack, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"

export const Lesson = ({index, key}) => {
    const router = useRouter()
    // console.log(router)
    return (
        <HStack py={2} px={3} key={key}>
            <ChatIcon mr={3}/>
            <Link href={`${router.asPath}/lesson1`}>Lesson {index}</Link>
        </HStack>
    )
}