import { render, screen } from "@testing-library/react";
import Skill from "./Skill";

describe("Skill", () => {
    const skills = ["React", "TypeScript", "JavaScript", "HTML", "CSS"];
    test("renders correctly", () => {
        render(<Skill skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<Skill skills={skills} />);
        const listItemElement = screen.getAllByRole("listitem");
        expect(listItemElement).toHaveLength(5);
    })

    test("renders login button", () => {
        render(<Skill skills={skills} />);
        const loginButton = screen.getByRole("button", { name: /login/i });
        expect(loginButton).toBeInTheDocument();
    })

    test("renders start learning button is not rendered", () => {
        render(<Skill skills={skills} />);
        const startLearningButton = screen.queryByRole("button", { name: "Start Learning" });
        expect(startLearningButton).not.toBeInTheDocument();
    })

    test("renders start learning button after login button is clicked", async () => {
        render(<Skill skills={skills} />);
        const startLearningButton = await screen.findByRole("button", { name: "Start Learning" }, { timeout: 1000 });
        expect(startLearningButton).toBeInTheDocument();
    });
});