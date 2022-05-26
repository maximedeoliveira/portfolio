import useTheme, { THEME } from '@/hooks/useTheme';
import Moon from '@/icons/Moon';
import Sun from '@/icons/Sun';

const ThemeToggle = () => {
    const { theme, switchTheme } = useTheme();

    const Icon = theme === THEME.DARK ? Sun : Moon;

    return (
        <div className="absolute top-6 right-6 group">
            <div
                className="px-2 py-2 rounded-lg cursor-pointer group-hover:bg-opacity-70 group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                onClick={switchTheme}
            >
                <Icon className="w-6 h-6 text-gray-300 stroke-current dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
            </div>
        </div>
    );
};

export default ThemeToggle;
