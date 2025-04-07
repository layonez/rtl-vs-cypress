import { Button as UI5Button } from "@ui5/webcomponents-react";
import { useState } from "react";

export const Button = () => {
    const [clickCount, setClickCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setClickCount((prev) => prev + 1);
        setDisabled(true);
    };

    return (
        <div>
            <UI5Button disabled={disabled} onClick={handleClick}>Click me</UI5Button>
            <p data-testid="click-count">Clicked {clickCount} times</p>
        </div>
    );
}; 