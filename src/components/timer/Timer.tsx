import moment from "moment";
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const Timer = () => {

    return <Box alignItems="center">
        <FlipClockCountdown
            digitBlockStyle={{
                color: '#fb6087',
                fontWeight: '700',
                width: "80px",
                fontSize: "67px",
                fontFamily: "'Red Hat Text', sans-serif",
                backgroundColor: "#343650"
            }}
            labelStyle={{
                color: "#6C6A83",
                fontFamily: "'Red Hat Text', sans-serif",
                fontSize: "14px"
            }}
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000} showSeparators={false} spacing={{ clock: 10 }}></FlipClockCountdown>
    </Box>
}

export default Timer;