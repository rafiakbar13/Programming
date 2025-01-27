import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);

        const pageHeading = screen.getByRole("heading", {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const paragraph = screen.getByText("All Fields are mandatory");
        expect(paragraph).toBeInTheDocument();

        const imageElement = screen.getAllByAltText("a person with a laptop");
        expect(imageElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {
            name: 'Name',
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();

        const element4 = screen.getByDisplayValue("Rafi");
        expect(element4).toBeInTheDocument();


        const bioElement = screen.getByRole("textbox", {
            name: 'Bio',
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole("button");
        expect(submitElement).toBeInTheDocument();
    });
});