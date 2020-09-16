import React, {useState, useEffect} from "react";
import Timer from "../timer/timer";
import Modal from "../modal/modal";
import "../../style/normalize.css";
import "../../style/app.css";
const App = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [startMinutes, setStartMinutes] = useState(0);
    const [startSeconds, setStartSeconds] = useState(0);
    const [appTitle, setAppTitle] = useState("Let's work !");
    const [cooldown, setCooldown] = useState(100);
    const [ticSound, setTicSound] = useState(true);

    const timeToGo =
        ((minutes * 60 + seconds) / (startMinutes * 60 + startSeconds)) * 100;
    const titleUpdate = () => {
        if (timeToGo > 75 && timeToGo <= 100) {
            setAppTitle("Let's work !");
        }
        if (timeToGo > 50 && timeToGo <= 75) {
            setAppTitle("A little more");
        }
        if (timeToGo > 25 && timeToGo <= 50) {
            setAppTitle("Half way !");
        }
        if (timeToGo <= 25){
            setAppTitle("Finish line !");
        }
    };

    useEffect(() => {
        setCooldown(timeToGo);
        titleUpdate();
    });
    const styleWidth = {
        width: `${cooldown}%`,
    };
    const changeClassName = () => {

    }

    return (
        <div>
            <div className={"timerCount"}>
                <div className={"timerBackground"} style={styleWidth} />
                <h2 className={"appTitle"}>{appTitle}</h2>
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
                    ticSound={ticSound}
                    setTicSound={setTicSound}
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
