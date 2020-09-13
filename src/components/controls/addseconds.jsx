import React from "react";

const AddSeconds = ({seconds, setSeconds, minutes, setMinutes, isActive}) => {
    const plusSeconds = () => {
        if (minutes === 59) {
            if (seconds >= 50) {
                setMinutes(minutes = 60);
                setSeconds(seconds = 0);
            } else {
                setSeconds(seconds + 10);
            }
        }
        if (minutes < 59) {
            if (seconds >= 50) {
                setMinutes(minutes + 1);
                setSeconds(seconds - 50);
            } else {
                setSeconds(seconds + 10);
            }
        }
    };

    return (
        <button
            className={"addSeconds"}
            onClick={plusSeconds}
            disabled={isActive}>
            {"^"}
        </button>
    );
};
export default AddSeconds;
