import React, {useState} from "react";
import ButtonTimer from "../controls/button";

const Modal = props => {
    // Add 1 minutes to timer
    const [displayModal, setDisplayModal] = useState(props.isActive);

    const addMinute = () => {
        if (props.minutes < 60) {
            props.setMinutes(props.minutes + 1);
        }

        if (props.minutes === 59) {
            props.setMinutes(60);
            props.setSeconds(0);
        }
    };
    // Add 10 seconds to timer
    const addSeconds = () => {
        if (props.minutes === 59) {
            if (props.seconds >= 50) {
                props.setMinutes(60);
                props.setSeconds(0);
            } else {
                props.setSeconds(props.seconds + 10);
            }
        }
        if (props.minutes < 59) {
            if (props.seconds >= 50) {
                props.setMinutes(props.minutes + 1);
                props.setSeconds(props.seconds - 50);
            } else {
                props.setSeconds(props.seconds + 10);
            }
        }
    };
    // Remove 1 minute to timer
    const minusMinute = () => {
        if (props.minutes > 0) {
            props.setMinutes(props.minutes - 1);
        }

        if (props.minutes === 0) {
            props.setMinutes(0);
            props.setSeconds(0);
        }
    };
    // Remove 10 seconds to timer

    const minusSeconds = () => {
        if (props.minutes === 0) {
            if (props.seconds < 10) {
                props.setMinutes(0);
                props.setSeconds(0);
            } else {
                props.setSeconds(props.seconds - 10);
            }
        }
        if (props.minutes > 0) {
            if (props.seconds < 10) {
                props.setMinutes(props.minutes - 1);
                props.setSeconds(props.seconds + 50);
            } else {
                props.setSeconds(props.seconds - 10);
            }
        }
    };
    // Save default timer
    const save = () => {
        props.setStartMinutes(props.minutes);
        props.setStartSeconds(props.seconds);
        props.setIsActive(true);
    };
    // Reset timer to saved default timer

    const reset = () => {
        props.setIsActive(false);
        props.setMinutes(props.startMinutes);
        props.setSeconds(props.startSeconds);
    };

    const buttonStyle = "btn";
    return (
        <div
            className={"Modal"}
            id={"Modal"}
            style={{display: props.isActive ? "none" : "block"}}>
            <ButtonTimer
                buttonClassName={props.isActive ? "disabled" : buttonStyle}
                buttonName={"+1 Min"}
                buttonActive={props.isActive}
                handleClickFunction={addMinute}
            />
            <ButtonTimer
                buttonClassName={props.isActive ? "disabled" : buttonStyle}
                buttonName={"+10 Sec"}
                buttonActive={props.isActive}
                handleClickFunction={addSeconds}
            />
            <ButtonTimer
                buttonClassName={props.isActive ? "disabled" : buttonStyle}
                buttonName={"-1 Min"}
                buttonActive={props.isActive}
                handleClickFunction={minusMinute}
            />
            <ButtonTimer
                buttonClassName={props.isActive ? "disabled" : buttonStyle}
                buttonName={"-10 Sec"}
                buttonActive={props.isActive}
                handleClickFunction={minusSeconds}
            />
            <ButtonTimer
                buttonClassName={props.isActive ? "disabled" : buttonStyle}
                buttonName={"Reset"}
                buttonActive={props.isActive}
                handleClickFunction={reset}
            />
            <ButtonTimer
                buttonClassName={props.isActive ? "disabled" : buttonStyle}
                buttonName={"Save & go!"}
                buttonActive={props.isActive}
                handleClickFunction={save}
            />
        </div>
    );
};

export default Modal;
