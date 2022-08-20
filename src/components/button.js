import { Button, Center } from "@chakra-ui/react";

export default function AnimatedButton ({func, text, type}) {
    return (
        <>
        {type == 'submit' ? <Button px={10} color={'white'} textTransform={'capitalize'} transition="0.3s" boxShadow={'0 4px 15px 0 rgba(229, 66, 10, 0.75)'} backgroundSize={'300% 100%'} borderRadius={'50px'} bg="bg.linearOrange" _hover={{bgPos:'100% 0', transition: '0.3s'}} onSubmit={func} type={type} >{text}</Button> 
        :<Button px={10} color={'white'} textTransform={'capitalize'} transition="0.3s" boxShadow={'0 4px 15px 0 rgba(229, 66, 10, 0.75)'} backgroundSize={'300% 100%'} borderRadius={'50px'} bg="bg.linearOrange" _hover={{bgPos:'100% 0', transition: '0.3s'}} onClick={func} >{text}</Button> }
        </>

    )
}