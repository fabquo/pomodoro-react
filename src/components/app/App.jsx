import React, {useState, useEffect} from "react";
import Timer from "../timer/timer";
import Modal from "../modal/modal";
import "../../style/normalize.css";
import "../../style/app.css";
const App = () => {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [startMinutes, setStartMinutes] = useState(0);
    const [startSeconds, setStartSeconds] = useState(0);

    const [cooldown, setCooldown] = useState(100);

    const timeToGo =
        ((minutes * 60 + seconds) / (startMinutes * 60 + startSeconds)) * 100;
    useEffect(() => {
        setCooldown(timeToGo);
    });
    const styleWidth = {
        width: cooldown + "%",
    };
    return (
        <div>
            <div className={"timerCount"}>
                <div className={"timerBackground"} style={styleWidth} />
                <h2 className={"appTitle"}>Let's Work !</h2>
                <h1 className={"timerCount--timer"}>
                    {minutes < 10 && "0"}
                    {minutes}
                    {":"}
                    {seconds < 10 && "0"}
                    {seconds}
                </h1>

                <Timer
                    isActive={isActive}
                    setIsActive={setIsActive}
                    minutes={minutes}
                    setMinutes={setMinutes}
                    seconds={seconds}
                    setSeconds={setSeconds}
                />
            </div>
            <Modal
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
        </div>
    );
};
export default App;
