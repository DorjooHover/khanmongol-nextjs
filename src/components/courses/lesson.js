import { ChatIcon } from "@chakra-ui/icons"
import { HStack, Link } from "@chakra-ui/react"

export const Lesson = ({index, key}) => {
    return (
        <HStack py={2} px={3} key={key}>
            <ChatIcon mr={3}/>
            <Link>Lesson {index}</Link>
        </HStack>
    )
}