import moment from "moment";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState(moment.duration(5, "minutes"));

    useEffect(() => {
        const interval = setInterval(() => {
            handleTimeLeft()
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    const handleTimeLeft = () => {
        setTimeLeft(prevTimeLeft => prevTimeLeft.clone().subtract(1, 'second'));
    }

    return <div>
        <Text color="white">Time left: {timeLeft.hours()}:{timeLeft.minutes()}:{timeLeft.seconds()}</Text>
    </div>
}

export default Timer;