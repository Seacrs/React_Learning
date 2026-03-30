import { useState } from 'react';
import { ThemeContext } from '../context';
import PropTypes from 'prop-types';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme((prev) => !prev);
        document.body.classList.toggle("dark")
    }

    return (
        <ThemeContext value={{theme, toggleTheme}}>
            { children }
        </ThemeContext>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ThemeProvider;