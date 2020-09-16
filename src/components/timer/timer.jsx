import React, {useState, useEffect} from "react";
import ButtonTimer from "../controls/button";
import soundfile from "../../medias/alarm.mp3";
import tic from "../../medias/tic.wav";

//const [ticSound, setTicSound] = useState(true);

const Timer = props => {
    const ticker = new Audio(tic);
    const audio = new Audio(soundfile);
    // Activate timer or stop it
    const toggle = () => {
        props.setIsActive(!props.isActive);
    };

    const toggleTic = () => {
        props.setTicSound(!props.ticSound);
    };

    // Run cooldown from Min to zero
    useEffect(() => {
        let interval = null;
        if (props.isActive) {
            if (props.seconds > 0) {
                interval = setTimeout(() => {
                    props.setSeconds(props.seconds - 1);
                    if (props.ticSound) {
                        ticker.play();
                    }
                }, 1000);
            } else if (props.seconds === 0 && props.minutes > 0) {
                interval = setTimeout(() => {
                    props.setSeconds(props.seconds + 59);
                    props.setMinutes(props.minutes - 1);
                    if (props.ticSound) {
                        ticker.play();
                    }
                }, 1000);
            } else {
                clearTimeout(interval);
                props.setIsActive(!props.isActive);
                audio.play();
            }
        }
    });

    return (
        <div className={"timerControls"}>
            <div className={"startStop"}>
                <ButtonTimer
                    buttonClassName={"startStop__button"}
                    buttonName={props.isActive ? "STOP" : "START"}
                    handleClickFunction={toggle}
                />
            </div>
            <div className={"toggleTic"}>
                <ButtonTimer
                    buttonClassName={"ticButton"}
                    buttonName={props.ticSound ? "Mute" : "TIC/TAC"}
                    handleClickFunction={toggleTic}
                />
            </div>
        </div>
    );
};
export default Timer;
