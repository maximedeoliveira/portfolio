import type { SVGProps } from 'react';

const Linkedin = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={44}
            height={44}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <rect x={4} y={4} width={16} height={16} rx={2} />
            <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
        </svg>
    );
};

export default Linkedin;
