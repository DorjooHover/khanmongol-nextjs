import { Box, Center, HStack } from "@chakra-ui/react";
import { SemiCard } from "./home/card";
import MainTitle from "./mainTitle";

export default function ChooseUs() {
    return (
        <Center>
        <Box maxW={'1170px'} gap={10} w={'100%'}  color={'text.card.text'} textAlign='center' py={20} alignItems='center'>
          <MainTitle heading1={'why'} heading2={'choose us'} />
          <HStack mt={10} gap={10}>
            <SemiCard heading={'2500'} text={'Students Successive'}/>
            <SemiCard heading={'4500'} text={'Competitions Won'}/>
            <SemiCard heading={'8530'} text={'Magazines Won'}/>
          </HStack>
        </Box>
      </Center>
    )
}