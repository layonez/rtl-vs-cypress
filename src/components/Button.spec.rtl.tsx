import { render, fireEvent, waitFor } from "@testing-library/react";
import { Button } from "./Button";
import { screen } from 'shadow-dom-testing-library'


describe("Button Component", () => {
    it("should increment click count when clicked", async () => {
        render(<Button />);

        // usual selectors doenst work here
        const button = await screen.findByShadowRole("button", { name: "Click me" });
        const clickCount = screen.getByTestId("click-count");

        expect(clickCount).toHaveTextContent("Clicked 0 times");

        fireEvent.click(button);
        expect(clickCount).toHaveTextContent("Clicked 1 times");

        // second click disables the button and still jsdom ignores it
        fireEvent.click(button);
        expect(clickCount).toHaveTextContent("Clicked 2 times");
    });

    it("should disable button when clicked", async () => {
        render(<Button />);

        const button = await screen.findByShadowRole("button", { name: "Click me" });
        //toBeEnabled toBeDisabled doesnt work on shadow dom elements and produces unpredicatable results
        expect(button?.getAttribute('disabled')).toBe(null)

        fireEvent.click(button);

        // this is how disabled is set on the button
        // <ui5-button
        //     accessible-role="Button"
        //     design="Default"
        //     desktop=""
        //     disabled=""
        //     type="Button"
        //     ui5-button=""
        // >
        await waitFor(() => {
            expect(button?.getAttribute('disabled')).toBe('')
        })
    });
}); 