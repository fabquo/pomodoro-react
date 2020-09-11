import React from "react";

const StartStop = ({isActive, setIsActive}) => {
    const toggle = () => {
        setIsActive(!isActive);
    };

    return (
        <button className={"startStop"} onClick={toggle}>
            {isActive ? "Stop" : "Start"}
        </button>
    );
};

export default StartStop;
