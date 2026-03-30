import { ThemeContext } from "../context"
import { use } from "react"

const useTheme = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    return { theme, toggleTheme}
}

export { useTheme }