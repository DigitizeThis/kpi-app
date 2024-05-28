import React from "react";
import { CubeIcon } from "@heroicons/react/24/outline";
import { Button } from "../Buttons/Button";

export const RequestButton: React.FC = () => {

    const handlerRequestButton = () => {
        console.log('Request Handler Ready...');
    };
    
    return (
        <Button
            type="button"
            role="button"
            className="h-max w-max rounded-lg px-2 py-1 text-white text-base bg-[#64738b] hover:bg-gray-600"
            onClick={handlerRequestButton}
        >
            <CubeIcon className="h-5 w-5 text-white-400" />
            <div className="ml-2">Request</div>
        </Button>
    );
};
export default RequestButton;
