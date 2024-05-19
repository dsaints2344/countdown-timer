import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import bgStars from "../assets/bg-stars.svg";
import patternHills from "../assets/pattern-hills.svg"

interface Props {
    children?: ReactNode;

}

const Layout: FC<Props> = ({ children }) => {
    return <>
        <Box backgroundImage={bgStars}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            height="100vh"
            minWidth="100vw"
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
                backgroundRepeat="no-repeat" // Optional: control footer image repeat
            />
        </Box>
    </>;
}

export default Layout