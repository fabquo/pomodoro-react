import React from "react";

const ButtonTimer = props => (
    <div
        className={props.buttonClassName}
        onClick={props.handleClickFunction}
        onMouseDown={props.handleMouseDownFunction}
        onMouseUp={props.handleMouseUpFunction}
        disabled={props.buttonActive}>
        {props.buttonName}
    </div>
);
export default ButtonTimer;
