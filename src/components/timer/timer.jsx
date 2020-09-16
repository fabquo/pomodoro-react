import React, {useEffect} from "react";
import ButtonTimer from "../controls/button";
import soundfile from "../../medias/alarm.mp3";

const Timer = props => {
    const audio = new Audio(soundfile);
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
                audio.play();
            }
        }
    });

    return (
        <div className={"startStop"}>
            <ButtonTimer
                buttonClassName={"startStop__button"}
                buttonName={props.isActive ? "STOP" : "START"}
                handleClickFunction={toggle}
            />
        </div>
    );
};
export default Timer;
