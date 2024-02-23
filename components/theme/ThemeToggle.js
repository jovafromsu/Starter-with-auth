import { useTheme } from "@/context/theme";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    // state
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            {mounted && (
                <button className="nav-link" onClick={toggleTheme}>
                    {/* crescent moon, sun with rays */}
                    {theme === "light" ? "🌙 " : "☀ "}
                </button>
            )}
        </>
    );
}