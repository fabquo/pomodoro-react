import React from "react";

const AddTime = ({minutes, setMinutes}) => {
    const time = () => {
        if (minutes < 60) {
            setMinutes(minutes + 1);
        }
    };

    return (
        <button className={"addTime"} onClick={time}>
            {"^"}
        </button>
    );
};
export default AddTime;
