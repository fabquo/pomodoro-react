import React from "react";

const MinusSeconds = ({seconds, setSeconds, minutes, setMinutes, isActive}) => {
    const minusSeconds = () => {
        if (minutes === 0) {
            if (seconds < 10) {
                setMinutes(minutes = 0);
                setSeconds(seconds = 0);
            } else {
                setSeconds(seconds - 10);
            }
        }
        if (minutes > 0) {
            if (seconds < 10) {
                setMinutes(minutes - 1);
                setSeconds(seconds + 50);
            } else {
                setSeconds(seconds - 10);
            }
        }
    };

    return (
        <button
            className={"addSeconds"}
            onClick={minusSeconds}
            disabled={isActive}>
            {"^"}
        </button>
    );
};
export default MinusSeconds;
