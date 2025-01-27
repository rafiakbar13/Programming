import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
    test("renders Counter component", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toBeInTheDocument();
        const Increment = screen.getByRole("button", {
            name: /increment/i,
        });
        expect(Increment).toBeInTheDocument();
    });

    test("renders a count of 0", () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement.textContent).toBe("0");
    })

    test("increments count by 1", async () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        const Increment = screen.getByRole("button", {
            name: /increment/i,
        });
        await user.click(Increment);
        expect(countElement).toHaveTextContent("1");
    })

    test("renders a count of 10 after clicking the set button", async () => {
        render(<Counter />);
        const amountInput = screen.getByRole("spinbutton");
        await user.type(amountInput, "10");
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole("button", {
            name: /set/i,
        });
        await user.click(setButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("10");
    })

    test("elements are fouces in the right order", async () => {
        render(<Counter />);
        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button", {
            name: /set/i,
        });
        const Increment = screen.getByRole("button", {
            name: /increment/i,
        });
        await user.tab();
        expect(Increment).toHaveFocus();
        await user.tab();
        expect(amountInput).toHaveFocus();
        await user.tab();
        expect(setButton).toHaveFocus();
    })
});