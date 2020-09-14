import React from "react";

const ButtonTimer = props => (
    <div
        className={props.buttonClassName}
        onClick={props.handleClickFunction}
        disabled={props.buttonActive}>
        {props.buttonName}
    </div>
);
export default ButtonTimer;
