import React, {useEffect} from "react";
import ButtonTimer from "../controls/button";

const Timer = props => {
    // Activate timer or stop it
    const toggle = () => {
        props.setIsActive(!props.isActive);
    };

    // Run cooldown from Min to zero
    useEffect(() => {
        let interval = null;
        if (props.isActive) {
            if (props.seconds > 0) {
                interval = setTimeout(() => {
                    props.setSeconds(props.seconds - 1);
                }, 1000);
            } else if (props.seconds === 0 && props.minutes > 0) {
                interval = setTimeout(() => {
                    props.setSeconds(props.seconds + 59);
                    props.setMinutes(props.minutes - 1);
                }, 1000);
            } else {
                clearTimeout(interval);
                props.setIsActive(!props.isActive);
            }
        }
    });

    return (
        <div>
            <ButtonTimer
                buttonClassName={"startStop"}
                buttonName={props.isActive ? "Stop" : "Start"}
                handleClickFunction={toggle}
            />
        </div>
    );
};
export default Timer;
