import moment from "moment";
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Timer = () => {

    return <Box alignItems="center">
        <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} ></FlipClockCountdown>
    </Box>
}

export default Timer;