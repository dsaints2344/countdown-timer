import { Box, Center, Flex, Image, Spacer } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import bgStars from "../assets/bg-stars.svg";
import patternHills from "../assets/pattern-hills.svg";
import fbIcon from "../assets/icon-facebook.svg";
import igIcon from "../assets/icon-instagram.svg";
import pinterestIcon from "../assets/icon-pinterest.svg";

interface Props {
    children?: ReactNode;

}

const Layout: FC<Props> = ({ children }) => {
    return <>
        <Box backgroundImage={bgStars}
            backgroundPosition="center"
            backgroundRepeat="repeat"
            height="100vh"
            minW="100vw"
            minHeight="100vh"
            backgroundColor="neutral.veryDarkMostlyBlackBlue"
            display="flex" // Enable flexbox layout
            justifyContent="center" // Center content horizontally
            alignItems="center" // Center content vertically (optional)
        >
            {children}
            <Box
                position="absolute" // Position the footer at the bottom
                bottom="0" // Set the bottom position to 0
                left="0" // Set the left position to 0 (optional, for full width)
                right="0" // Set the right position to 0 (optional, for full width)
                width="100%" // Set the width to 100% (optional, adjust as needed)
                height="193px" // Set the height of the footer (adjust as needed)
                backgroundImage={patternHills}
                backgroundPosition="center" // Optional: control footer image position
                backgroundRepeat="repeat" // Optional: control footer image repeat
            >
                <Center paddingTop="90px">
                    <Flex>
                        <Box w="50px">
                            <Image src={fbIcon} />
                        </Box>
                        <Spacer />
                        <Box w="50px">
                            <Image src={pinterestIcon} />
                        </Box>
                        <Spacer />
                        <Box w="50px">
                            <Image src={igIcon} />
                        </Box>
                    </Flex>
                </Center>

            </Box>
        </Box>
    </>;
}

export default Layout