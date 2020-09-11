import React, {useState} from "react";
import AddTime from "../controls/addtime";
import MinusTime from "../controls/minustime";
import StartStop from "../controls/startstop";
//import Reset from "../controls/reset";

const Timer = () => {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(15);
    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <AddTime minutes={minutes} setMinutes={setMinutes} />
            <h1>
                {minutes < 10 && "0"}
                {minutes}
                {":"}
                {seconds < 10 && "0"}
                {seconds}
            </h1>
            <MinusTime minutes={minutes} setMinutes={setMinutes} />
            <StartStop
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </div>
    );
};
export default Timer;
