import React from "react";

const SaveTimer = ({
    minutes,
    seconds,
    isActive,
    startMinutes,
    setStartMinutes,
    startSeconds,
    setStartSeconds,
}) => {
    const save = () => {
        setStartMinutes(startMinutes = minutes);
        setStartSeconds(startSeconds = seconds);
    };
    return (
        <button className={"saveTimer"} onClick={save} disabled={isActive}>
            {"Save Timer"}
        </button>
    );
};

export default SaveTimer;
