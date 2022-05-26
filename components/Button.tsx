import type { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode | ReactNode[];
};

const Button = (props: ButtonProps) => {
    return (
        <button className="flex flex-row items-center px-3 py-2 space-x-2 text-gray-900 border border-gray-900 rounded-lg dark:border-white dark:text-white hover:opacity-70">
            {props.children}
        </button>
    );
};

export default Button;
