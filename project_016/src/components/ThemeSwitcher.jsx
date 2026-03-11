import { useToggle } from '../hooks/useToogle'

export default function ThemeSwitcher(){
    const [isDark, toggleTheme] = useToggle();

    return (
        <button onClick={toggleTheme}>{isDark ? '🌛 Dark Mode' : '🌞 Light Mode'}</button>
    )
}