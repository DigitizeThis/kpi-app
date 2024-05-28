import React from "react";
import { ButtonProps } from "../../Interfaces/InterfaceButton";

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { id, dataTestId, onClick, disabled, type, className, label, children, startIcon, endIcon } = props;
    return (
        <button
            id={id}
            type={type}
            data-testid={dataTestId}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
                <div className="flex items-center justify-center">
                    {startIcon && (
                        <div className="mx-3">{startIcon}</div>
                    )}
                    {label}
                    {children}
                    {endIcon && <div className="ml-3">{endIcon}</div>}
                </div>
        </button>
    );
};