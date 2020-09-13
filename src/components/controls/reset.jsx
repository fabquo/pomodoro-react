import React from "react";

const Reset = ({
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    active,
    isActive,
    setIsActive,
    startMinutes,
    startSeconds,
}) => {
    const reset = () => {
        setIsActive(active = false);
        setMinutes(minutes = startMinutes);
        setSeconds(seconds = startSeconds);
    };
    return (
        <button className={"reset"} onClick={reset} disabled={isActive}>
            {"Reset"}
        </button>
    );
};

export default Reset;
