import React from "react";

const MinusTime = ({minutes, setMinutes}) => {
    const time = () => {
        if (minutes > 0) {
            setMinutes(minutes - 1);
        }
    };

    return (
        <button className={"minusTime"} onClick={time}>
            {"v"}
        </button>
    );
};
export default MinusTime;
