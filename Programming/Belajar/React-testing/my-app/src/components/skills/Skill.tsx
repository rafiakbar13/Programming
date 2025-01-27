import { useState, useEffect } from "react";
import { SkillsProps } from "./skills.types";


const Skill = ({ skills }: SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 500);
    }, []);

    return (
        <>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            {isLoggedIn ? (
                <button>Start Learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    );
};

export default Skill;