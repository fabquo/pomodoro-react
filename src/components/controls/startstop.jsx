import React, {useEffect} from "react";

const StartStop = ({seconds, setSeconds, isActive, setIsActive}) => {
    const toggle = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
        } else {
            clearTimeout(interval);
        }
    });

    return (
        <button className={"startStop"} onClick={toggle}>
            {isActive ? "Stop" : "Start"}
        </button>
    );
};

export default StartStop;
