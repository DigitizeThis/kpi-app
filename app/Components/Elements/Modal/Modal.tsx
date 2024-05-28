import { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { XCircleIcon } from "@heroicons/react/24/outline";

interface ModalProps {
    show: boolean;
    onBackdropClick?: MouseEventHandler<HTMLDivElement>;
    width?: string;
}

interface ModalSubComponents {
    Header: React.FC<ModalHeader>;
    Body: React.FC;
    Footer: React.FC<ModalFooter>;
}

const Modal: React.FC<ModalProps> & ModalSubComponents = (props) => {
    const { show, width = 'w-80', children } = props;

    return (
        <>
            {show && (
                <div
                    className={
                        'fixed top-0 left-0 w-screen h-screen flex bg-logo-blue bg-opacity-20 z-50'
                    }
                    onClick={props.onBackdropClick}
                >
                    <div
                        id="modal-app"
                        onClick={(e) => e.stopPropagation()}
                        className={classNames(
                            'w-11/12',
                            [`md:${width}`],
                            'border border-gray-200 rounded-lg m-auto bg-white'
                        )}
                    >
                        <div className="flex flex-col w-full">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

interface ModalHeader {
    onClose?: () => void;
}

const Header: React.FC<ModalHeader> = (props) => {
    return (
        <div className="w-full border-b border-sky-100 p-4 flex flex-col justify-between">
            <h2 className="text-2xl logo-blue align-middle">
                {props.children}
            </h2>
            {props.onClose && (
                <div className="cursor-pointer" onClick={props.onClose}>
                    <XCircleIcon className="text-gray"></XCircleIcon>
                </div>
            )}
        </div>
    );
};
Modal.Header = Header;

const Body: React.FC<{}> = (props) => (
    <div className="p-4 border-b border-sky-100 min-h-96">{props.children}</div>
);
Modal.Body = Body;

interface ModalFooter {
    className?: string;
}
const Footer: React.FC<ModalFooter> = (props) => (
    <div className={`p-2 flex flex-col justify-between ${props.className}`}>
        {props.children}
    </div>
);
Modal.Footer = Footer;

export default Modal;
