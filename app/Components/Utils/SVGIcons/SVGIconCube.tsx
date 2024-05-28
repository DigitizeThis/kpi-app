import React from 'react';
import { SvgIconProps } from '../../../Interfaces/InterfaceSVGIcons';

export type SvgIcon = React.FC<SvgIconProps>;

export const IconCube = ({
    width = 24,
    height = 24,
    strokeColor = 'currentColor',
    strokeWidth= 1.5,
    className = 'h-6 w-6 size-6',
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="none"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
        </svg>
    );
};
