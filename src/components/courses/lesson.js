import { ChatIcon } from "@chakra-ui/icons"
import { HStack, Link } from "@chakra-ui/react"

export const Lesson = ({index}) => {
    return (
        <HStack py={2} px={3}>
            <ChatIcon mr={3}/>
            <Link>Lesson {index}</Link>
        </HStack>
    )
}