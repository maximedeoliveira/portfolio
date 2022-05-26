import { useEffect, useState } from 'react';

export enum THEME {
    DARK = 'dark',
    LIGHT = 'light',
}

const useTheme = () => {
    const [theme, setTheme] = useState(THEME.DARK);

    const switchTheme = () => {
        setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
    };

    useEffect(() => {
        if (theme === THEME.DARK) {
            document.documentElement.classList.add(THEME.DARK);
        } else {
            document.documentElement.classList.remove(THEME.DARK);
        }
    }, [theme]);

    return { theme, switchTheme };
};

export default useTheme;
