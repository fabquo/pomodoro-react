import React from "react";

const MinusMinute = ({minutes, setMinutes, seconds, setSeconds, isActive}) => {
    const time = () => {
        if (minutes > 0) {
            setMinutes(minutes - 1);
        }

        if (minutes === 0) {
            setMinutes(minutes = 0);
            setSeconds(seconds = 0);
        }
    };

    return (
        <button className={"minusTime"} onClick={time} disabled={isActive}>
            {"v"}
        </button>
    );
};
export default MinusMinute;
