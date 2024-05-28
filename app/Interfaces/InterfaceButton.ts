import {MouseEventHandler, ReactNode} from "react";
export interface ButtonProps {
    id?: string;
    role?: string;
    label?: string;
    colorType?: 'primary' | 'secondary' | 'preview'; // default is primary
    type?: 'submit' | 'reset' | 'button' | undefined;    
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    isWide?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    dataTestId?: string;
    children?: ReactNode;
};
