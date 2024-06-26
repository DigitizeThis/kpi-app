import { useRef, useEffect, useCallback } from "react";

export const useTimeout = (callback: Function, delay: number) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        callbackRef.current = callback;  
        return () => {};
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, []);

    const reset = useCallback(() => {
        clear();
        set();
    }, []);
    
    
    return { reset, clear };
};