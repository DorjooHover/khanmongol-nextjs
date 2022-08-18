import { RepeatClockIcon, StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Container, Flex, Heading, HStack, Icon, Image, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { Curriculum, Overview } from "../../src/components/courses/tabs";
import { Title } from "../../src/components/mainTitle";

export default function Course() {
    return (
        <VStack>
            <Box bg="bg.purple" mb={12} pt={36} pb={10} w={'100%'}>
                <HStack maxW={'1170px'} mx='auto' >
                    <VStack w={'70%'} alignItems='start' >
                        <Flex w={'100%'} justifyContent='space-between' mb={8}>
                            <HStack>
                                <Avatar src="https://secure.gravatar.com/avatar/6d0d0b88ac8007ed3ac1215e581110b0?s=96&d=mm&r=g" w={'46px'}/>
                                <Box ml={2}>
                                    <Text color={'#999'}>Instructor</Text>
                                    <Link color={'white'}>Traininginstitute</Link>
                                </Box>
                            </HStack>
                            <HStack>
                                <Image src="https://secure.gravatar.com/avatar/6d0d0b88ac8007ed3ac1215e581110b0?s=96&d=mm&r=g" w={'46px'}/>
                                <Box ml={2}>
                                    <Text color={'#999'}>Category</Text>
                                    <Link color={'white'}>Test</Link>
                                </Box>
                            </HStack>
                            <Box textAlign={'end'}>
                                <HStack >
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                </HStack>
                                <Text>Review</Text>
                            </Box>
                        </Flex>
                        <Title text="Javascript Campus" color={'white'} size={'30px'}/>
                        <Flex w={'100%'} justifyContent='space-between' pt={10}>
                            <HStack alignItems={'center'}>
                                <Icon color={'text.icon'}><RepeatClockIcon/></Icon>
                                <Text color={'white'} fontWeight="thin">10 Weeks</Text>
                            </HStack>
                            <HStack alignItems={'center'}>
                                <Icon color={'text.icon'}><RepeatClockIcon/></Icon>
                                <Text color={'white'} fontWeight="thin">10 Weeks</Text>
                            </HStack>
                            <HStack alignItems={'center'}>
                                <Icon color={'text.icon'}><RepeatClockIcon/></Icon>
                                <Text color={'white'} fontWeight="thin">10 Weeks</Text>
                            </HStack>
                            <HStack alignItems={'center'}>
                                <Icon color={'text.icon'}><RepeatClockIcon/></Icon>
                                <Text color={'white'} fontWeight="thin">10 Weeks</Text>
                            </HStack>
                            <HStack alignItems={'center'}>
                                <Icon color={'text.icon'}><RepeatClockIcon/></Icon>
                                <Text color={'white'} fontWeight="thin">10 Weeks</Text>
                            </HStack>
                        </Flex>
                    </VStack>
                    <Box w={8}/>
                    <Box pos={'relative'}>
                    <VStack w={'300px'}  boxShadow='0 15px 20px 0 rgba(0,0,0,0.05)' pos={'fixed'} top={36}>
                        <Image src='https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2017/05/1.jpg'/>
                        <Container w={'100%'} px={4} py={10} bg={'white'} sx={{marginTop: '0 !important'}} textAlign='center'>
                            <Text fontSize={'26px'} mb={2}>$50</Text>
                            <Button borderRadius={5} border="1px" bg={'transparent'} w='100%'>Buy Now</Button>
                        </Container>
                    </VStack>
                    </Box>
                </HStack>
            </Box>
                <HStack maxW={'1170px'} mx='auto' w={'100%'} >
                    <VStack w={'70%'} alignItems='start' >
                    <Tabs isFitted variant='enclosed' w={'100%'}>
                        <TabList mb='1em'>
                            <Tab>Overview</Tab>
                            <Tab>Curriculum</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                            <Overview/>
                            </TabPanel>
                            <TabPanel>
                            <Curriculum/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs> 
                    </VStack>
                </HStack>
        </VStack>
    )
}