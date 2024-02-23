"use client";
import { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext();
const getDefaultTheme = () => {
    if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light";
    }
    return "light";
};
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getDefaultTheme());
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme); // save theme preference
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => useContext(ThemeContext);