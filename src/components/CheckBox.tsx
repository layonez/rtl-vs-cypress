import { CheckBox, CheckBoxDomRef, Ui5CustomEvent } from "@ui5/webcomponents-react";
import { useState } from "react";

export const CheckBoxComponent = ({ disabled }: {
    disabled?: boolean
}) => {
    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("Unchecked");

    const handleChange = (event: Ui5CustomEvent<CheckBoxDomRef>) => {
        const isChecked = event.target.checked;
        setChecked(isChecked);
        setText(isChecked ? "Checked" : "Unchecked");
    };

    return (
        <div>
            <CheckBox
                role="checkbox"
                disabled={disabled}
                checked={checked}
                onChange={handleChange}
                text="Toggle me"
            />
            <p data-testid="status-text">Status: {text}</p>
        </div>
    );
}; 