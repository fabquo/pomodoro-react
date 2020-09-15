import React, {useState} from "react";
import ButtonTimer from "../controls/button";

const Modal = props => {
    // Add 1 minutes to timer
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseUp, setMouseUp] = useState(true);

    const addMouseDown = () => {
        setMouseDown(!mouseDown);
        setMouseUp(!mouseUp);
    };

    const addMouseUp = () => {
        setMouseUp(!mouseUp);
        setMouseDown(!mouseDown);
    };

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

    const secondsToNull = () => {
        props.setSeconds(0);
    };

    const buttonStyle = "btn modalButton";
    return (
        <div
            className={"modal"}
            id={"Modal"}
            style={{display: props.isActive ? "none" : ""}}>
            <h1 className={"modalTitle"}>{"Time to take a break ! "}</h1>
            <div className={"modalTips"}>
                <p>
                    {
                        "Use Save & Start button to save actual timer to default timer et run it !"
                    }
                </p>
                <p>{"Use Reset button to reload previous saved timer"}</p>
            </div>

            <div className={"modalTimer"}>
                <h2>
                    {props.minutes < 10 && "0"}
                    {props.minutes}
                    {":"}
                    {props.seconds < 10 && "0"}
                    {props.seconds}
                </h2>
            </div>
            <div className={"sousModal"}>
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
                    buttonName={"Save & go!"}
                    buttonActive={props.isActive}
                    handleClickFunction={save}
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
                    buttonClassName={
                        props.isActive ? "disabled" : `${buttonStyle} setToNull`
                    }
                    buttonName={"Sec to 0"}
                    buttonActive={"props.isActive"}
                    handleClickFunction={secondsToNull}
                />
            </div>
        </div>
    );
};

export default Modal;
