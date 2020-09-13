import React, {useState, useEffect} from "react";
import AddMinute from "../controls/addminute";
import AddSeconds from "../controls/addseconds";
import MinusMinute from "../controls/minusminute";
import MinusSeconds from "../controls/minusseconds";
import StartStop from "../controls/startstop";
import Reset from "../controls/reset";
import SaveTimer from "../controls/savetimer";

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [startMinutes, setStartMinutes] = useState(0);
    const [startSeconds, setStartSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            if (seconds > 0) {
                interval = setTimeout(() => {
                    setSeconds(seconds - 1);
                }, 1000);
            } else if (seconds === 0 && minutes > 0) {
                interval = setTimeout(() => {
                    setSeconds(seconds + 59);
                    setMinutes(minutes - 1);
                }, 1000);
            } else {
                clearTimeout(interval);
                setIsActive(!isActive);
            }
        }
    });

    return (
        <div>
            <AddMinute
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                isActive={isActive}
            />
            <AddSeconds
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                isActive={isActive}
            />
            <h1>
                {minutes < 10 && "0"}
                {minutes}
                {":"}
                {seconds < 10 && "0"}
                {seconds}
            </h1>
            <MinusMinute
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                isActive={isActive}
            />
            <MinusSeconds
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                isActive={isActive}
            />
            <StartStop isActive={isActive} setIsActive={setIsActive} />
            <Reset
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                startMinutes={startMinutes}
                setStartMinutes={setStartMinutes}
                startSeconds={startSeconds}
                setStartSeconds={setStartSeconds}
                isActive={isActive}
                setIsActive={setIsActive}
            />
            <SaveTimer
                minutes={minutes}
                seconds={seconds}
                isActive={isActive}
                startMinutes={startMinutes}
                setStartMinutes={setStartMinutes}
                startSeconds={startSeconds}
                setStartSeconds={setStartSeconds}
            />
        </div>
    );
};
export default Timer;
