import React, {useState} from "react";
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

    return (
        <div>
            <div className={"timerCount"}>
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
