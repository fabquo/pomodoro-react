import React from "react";

const AddMinute = ({minutes, setMinutes, seconds, setSeconds, isActive}) => {
    const addMinutes = () => {
        if (minutes < 60) {
            setMinutes(minutes + 1);
        }

        if (minutes === 59) {
            setMinutes(minutes = 60);
            setSeconds(seconds = 0);
        }
    };

    return (
        <button className={"addTime"} onClick={addMinutes} disabled={isActive}>
            {"^"}
        </button>
    );
};
export default AddMinute;
