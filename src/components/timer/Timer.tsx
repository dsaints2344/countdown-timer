import moment from "moment";
import { Box } from "@chakra-ui/react";
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
                backgroundColor: "#343650",
                boxShadow: "0px 12px #1e1f29"
            }}
            labelStyle={{
                color: "#6C6A83",
                fontFamily: "'Red Hat Text', sans-serif",
                fontSize: "14px",
                paddingTop: "9px"

            }}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
            to={moment().add(5, "minutes").toDate().getTime()} showSeparators={false} spacing={{ clock: 10 }}></FlipClockCountdown>
    </Box>
}

export default Timer;