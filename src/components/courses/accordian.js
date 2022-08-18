import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import { Lesson } from "./lesson"

export const AccordionsItem = ({data}) => {
    
    return (

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Lessons
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {data.map((item, index) => <Lesson index={item} key={index}/>)}
                </AccordionPanel>
            </AccordionItem>

    )
}