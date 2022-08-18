import {Box, Image, Heading} from '@chakra-ui/react'
export default function MainTitle({heading1, heading2, left}) {
    return (
        <Box pos={'relative'} display='inline-block' textAlign={'start'}>
                <Image src='https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2018/08/heading_icon.png' pos={'absolute'} left={left ? left : '-20%'} />
            <Heading color={'text.title'} fontSize={'50px'} lineHeight={1.1} textTransform='capitalize'>{heading1}</Heading>
            <Heading color={'text.title'} fontSize={'50px'} lineHeight={1.1} textTransform='capitalize'>{heading2}</Heading>
        </Box>
    )
}

export const Title = ({text, size, color}) => {
    return (
        <Heading textTransform={'capitalize'} fontWeight={'normal'} color={color ? color : 'text.title'} fontSize={size ? size : '28px'}>{text}</Heading>
    )
} 